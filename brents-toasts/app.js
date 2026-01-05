import { toasts, ToastColor } from "./toasts-1.0.js";

const $ = (id) => document.getElementById(id);

const toastText = $("toastText");
const presetColor = $("presetColor");
const colorPicker = $("colorPicker");
const colorHex = $("colorHex");
const durationMs = $("durationMs");
const closable = $("closable");
const makeToast = $("makeToast");
const makeFive = $("makeFive");
const codePreview = $("codePreview");

function presetToHex6(key) {
  const c = ToastColor[key];
  const s = typeof c === "string" ? c : ToastColor.INFO;
  return s.slice(0, 7);
}

function withAlphaFF(hex) {
  const s = String(hex).trim();
  const len = s.length;
  const ok6 = len === 7;
  const ok8 = len === 9;
  return ok8 ? s : ok6 ? `${s}ff` : "#28a6f5ff";
}

function readDuration() {
  const n = Number.parseInt(durationMs.value, 10);
  const finite = Number.isFinite(n);
  const normalized = finite ? n : 3000;
  return normalized < 0 ? 0 : normalized;
}

function readMessageRaw() {
  const s = toastText.value;
  const t = s.trim();
  return t.length ? t : "Hello, toast.";
}

function readClosable() {
  return Boolean(closable.checked);
}

function colorExprForPreview() {
  const preset = presetColor.value;
  const custom = preset === "CUSTOM";
  return custom ? JSON.stringify(withAlphaFF(colorPicker.value)) : `ToastColor.${preset}`;
}

function colorValueForToast() {
  const preset = presetColor.value;
  const custom = preset === "CUSTOM";
  return custom ? withAlphaFF(colorPicker.value) : ToastColor[preset];
}

function syncColorUIFromPreset() {
  const preset = presetColor.value;
  const custom = preset === "CUSTOM";
  const next = custom ? colorPicker.value : presetToHex6(preset);
  colorPicker.value = next;
  colorHex.value = next.toUpperCase();
}

function syncColorUIFromPicker() {
  presetColor.value = "CUSTOM";
  colorHex.value = colorPicker.value.toUpperCase();
}

function updateCodePreview() {
  const msg = readMessageRaw();
  const dur = readDuration();
  const canClose = readClosable();
  const colorExpr = colorExprForPreview();

  const lines = [
    `import { toasts, ToastColor } from "./toasts-1.0.js";`,
    ``,
    `toasts.showToast(${JSON.stringify(msg)}, ${colorExpr}, ${dur}, ${canClose});`,
  ];

  codePreview.textContent = lines.join("\n");
}

function showOneToast() {
  const msg = readMessageRaw();
  const col = colorValueForToast();
  const dur = readDuration();
  const canClose = readClosable();

  toasts.showToast(msg, col, dur, canClose);
}

function showFiveToasts() {
  let i = 0;
  while (i < 5) {
    setTimeout(showOneToast, i*25);
    i += 1;
  }
}

function wirePreviewUpdates() {
  const update = () => updateCodePreview();

  toastText.addEventListener("input", update);
  durationMs.addEventListener("input", update);
  closable.addEventListener("change", update);

  presetColor.addEventListener("change", () => {
    syncColorUIFromPreset();
    updateCodePreview();
  });

  colorPicker.addEventListener("input", () => {
    syncColorUIFromPicker();
    updateCodePreview();
  });
}

makeToast.addEventListener("click", showOneToast);
makeFive.addEventListener("click", showFiveToasts);

// init
presetColor.value = "INFO";
colorPicker.value = presetToHex6("INFO");
syncColorUIFromPreset();
wirePreviewUpdates();
updateCodePreview();
