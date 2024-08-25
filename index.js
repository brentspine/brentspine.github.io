$(function() {
    $("html, body").animate({ scrollTop: 0 }, 500);
    load_skills();
    skill_section_notification_set();
    $("#section-1 .title span").text("Brentspine");
    $("#section-1 .text-wrapper").css("max-width", $("#section-1 .text-wrapper").width() + "px")
    setTimeout(function() {
        section_1_animation_1();
        setInterval(section_1_animation_1, 45000);
    }, 1500);
    setTimeout(function() {
        section_1_animation_2();
        setInterval(section_1_animation_2, 45000);
    }, 6750);
    setTimeout(function() {
        section_1_animation_3();
        setInterval(section_1_animation_3, 45000);
    }, 10000);


    if($(window).scrollTop() > 0){
        $("#section-1 .scroll-notice").fadeOut(100);
    }
    $(window).scroll(function(){
        if($(window).scrollTop() > 0){
            $("#section-1 .scroll-notice").fadeOut(100);
        } else if($("#section-1 .scroll-notice").css("opacity") < 1 || $("#section-1 .scroll-notice").css("display") == "none"){
            $("#section-1 .scroll-notice").fadeIn(100);
        }
    });
    $("#section-1 .scroll-notice").click(function() {
        $("html, body").animate({ scrollTop: $("#section-2").offset().top - 40}, 1000);
    });
    $("#section-1 .button").click(function() {
        $("html, body").animate({ scrollTop: $("#section-contact").offset().top}, 1000);
    });

    // $("#section-2 .wrapper").css("margin", "0 " + ((($("#app").width() / 2) - $("#section-1 .text").width()) / 2));
});

function skill_section_notification_set() {
    // Create notification container
    const notification = document.createElement('div');
    notification.id = 'skill-notification';

    // Add SVG Arrow and Text
    notification.innerHTML = `
        <div class="image-wrapper-contain"><img src="./images/arrow_notice_skills.svg" ></div>
        <span class="all">Klicke für mehr Informationen!</span>
        <span class="phone">Klicke mich!</span>
    `;

    // Append the notification to the body
    document.body.appendChild(notification);
    
    // Adjust these values to position correctly relative to #section-skill
    setInterval(skill_section_notification_update, 500);
}

function skill_section_notification_update() {
    const notification = document.querySelector('#skill-notification');

    // Position the notification based on #section-skill
    const sectionSkill = document.querySelector('#section-skill');
    const rect = sectionSkill.getBoundingClientRect();
    const top = window.scrollY;

    const offsetX = -25;
    const offsetY = -0;
    let screenOffsetY = 0;
    let screenOffsetX = 0;

    if(document.body.clientWidth <= 420) {
        screenOffsetX = -3;
        screenOffsetY = 4;
    }

    notification.style.left = `calc(${rect.right}px + ${offsetX}vw + ${screenOffsetX}vw)`;
    notification.style.top = `calc(${rect.top}px + ${offsetY}px + ${top}px + ${screenOffsetY}vh)`;
}

function section_1_animation_1() {
    if(!document.hasFocus()) {
        $('#section-1 .title span[data-clone=true]').remove();
        $('#section-1 .title span').text("BrentspineDev");
        return;
    }
    $("#section-1 .title").addClass("typing-animation");
    setTimeout(function() {
        $("#section-1 .title span").text("BrentspineD");
    }, 1250);
    setTimeout(function() {
        $("#section-1 .title span").text("BrentspineDe");
    }, 2000);
    setTimeout(function() {
        $("#section-1 .title span").text("BrentspineDev");
    }, 2750);
    setTimeout(function() {
        $("#section-1 .title").removeClass("typing-animation");
    }, 3500);
}

function section_1_animation_2() {
    if(!document.hasFocus()) {
        $('#section-1 .title span[data-clone=true]').remove();
        $('#section-1 .title span').text("Developer");
        return;
    }
    original_width = $("#section-1 .title").width() + "px";
    $("#section-1 .title span").text("Developer");
    width_needed = ($("#section-1 .title").width())+ "px";
    $("#section-1 .title span").text("BrentspineDeveloper");
    $("#section-1 .title").css("width", original_width);
    $("#section-1 .title").css("overflow", "hidden");
    $("#section-1 .title span").css("white-space", "nowrap");
    $('#section-1 .title span').animate({marginLeft: '-'+width_needed}, 1000, 'linear', function() {
        $("#section-1 .title span").text("Developer");
        $("#section-1 .title span").css({marginLeft: 0}); // Reset the position
        $("#section-1 .title").css("width", "");
        $("#section-1 .title").css("overflow", "");
        $("#section-1 .title span").css("white-space", "");
    });
}

function section_1_animation_3() {
    if(!document.hasFocus()) {
        $('#section-1 .title span[data-clone=true]').remove();
        $('#section-1 .title span').text("Brentspine");
        return;
    }
    initial_height = $("#section-1 .title").height();
    $("#section-1 .title").css("height", $("#section-1 .title").height() + "px");
    height_needed = $("#section-1 .title").height();
    $("#section-1 .title").css("overflow", "hidden");
    $("#section-1 .title").css("display", "flex");
    $("#section-1 .title").css("flex-direction", "column");
    // Remove every #section.1 .title span except for one without checking for clones
    $("#section-1 .title span").not(":first").remove();
    
    $("#section-1 .title span").attr("data-clone", "false");
    
    $("#section-1 .title").append("<span data-clone='true'>BackendDev</span>");

    $("#section-1 .title").append("<span data-clone='true'>Student</span>");

    $("#section-1 .title").append("<span data-clone='true'>Brentspine</span>");


    $('#section-1 .title span[data-clone=false]').animate({"margin-top": '-'+(height_needed*2) + "px"}, 250, 'linear');
    setTimeout(function() {
        $('#section-1 .title span[data-clone=false]').animate({"margin-top": '-'+(height_needed*1)+"px"}, 250, 'linear');
    }, 2500);
    setTimeout(function() {
        $('#section-1 .title span[data-clone=false]').animate({"margin-top": '-'+(height_needed*3)+"px"}, 250, 'linear');
    }, 5000);
    setTimeout(function() {
        $('#section-1 .title span[data-clone=false]').text("Brentspine");
        $('#section-1 .title span[data-clone=true]').remove();
        $("#section-1 .title").css("height", $("#section-1 .title").height() + "px");
        $("#section-1 .title").css("overflow", "");
        $("#section-1 .title").css("display", "");
        $("#section-1 .title").css("flex-direction", "");
        $("#section-1 .title span").css("margin-top", "");
    }, 7500);
}

function load_skills() {
    console.log("Loading skills");  
    $.get("skill_section_template.php", function(template) {
        console.log(template);
        $.get("skills.json", function(data) {
            skills = data.skills;
            // Order each skill by "sort" attribute
            skills.sort(function(a, b) {
                return b.sort - a.sort;
            });
            for(var i = 0; i < skills.length; i++) {
                var skill = skills[i];
                var template_clone = template;
                template_clone = template_clone.replaceAll("{{skill_name}}", skill.name);
                template_clone = template_clone.replaceAll("{{skill_level}}", skill.level);
                template_clone = template_clone.replaceAll("{{skill_icon}}", skill.icon);
                template_clone = template_clone.replaceAll("{{skill_description}}", skill.description);
                template_clone = template_clone.replaceAll("{{skill_all}}", JSON.stringify(skill));
                if(skill.hidden)
                    template_clone = template_clone.replaceAll("{{skill_custom_style}}", "display: none;")
                $("#skill-grid").append(template_clone);
            }
        }).fail(function(jqXHR, textStatus, errorThrown) {
            console.log("Failed to load skills.json");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        });
    });
}

skill_panel_animation_duration = 350;
function on_skill_click(element) {
    // Remove any existing panels
    console.log(element);
    const existingPanel = document.querySelector('.skill-panel');
    if (existingPanel) {
        if ($(existingPanel).attr("data-box-num") == $(element).index()) {
            element.classList.remove('active');
            $(existingPanel).slideUp(skill_panel_animation_duration, function() {
                this.remove();
            });
            return;
        }
        $(existingPanel).slideUp(skill_panel_animation_duration, function() {
            const existingPanel = document.querySelector('.skill-panel');
            existingPanel.remove();
            show_skill_panel(element);
        });
    }
    else {
        show_skill_panel(element);
    }
}

function show_skill_panel(element) {
    // Create a new panel
    const panel = document.createElement('div');
    panel.classList.add('skill-panel');
    // panel.innerText = 'This is a detailed panel for ' + element.dataset.title;
    data = JSON.parse(element.dataset.all);
    console.log(data);
    links = data.bottom_links;
    link_string = "";
    for(var i = 0; i < links.length; i++) {
        // Check if links[i].icon exists
        if(links[i].icon) {
            name_string = links[i].add_name ? links[i].name : "";
            width = links[i].icon_width ? links[i].icon_width : "18px";
            height = links[i].icon_height ? links[i].icon_height : "18px";
            image_wrapper = links[i].image_wrapper ? links[i].image_wrapper : "image-wrapper-contain";
            link_string += `<a href="${links[i].url}" target="_blank" style="display: flex; align-items: center;"><div class="${image_wrapper}" style="height: ${height}; width: ${width}; padding-right: 6px;"><img src="${links[i].icon}" alt="${links[i].name}"></div> ${name_string}</a>`;
        }
        else
            link_string += `<a href="${links[i].url}" target="_blank">${links[i].name}</a>`;
    }
    
    panel.innerHTML = `
        <div class="skill-panel-header">
            <div>
                <div class="image-wrapper-contain" style="height: 30px;">
                    <img src="${element.dataset.icon}" alt="${element.dataset.title} Icon">
                </div>
            </div>
            <div class="skill-panel-title">
                <span>${element.dataset.title}</span>
            </div>
            <div>
                <!-- AAAH GRRRR WOOF WOOF SKRRRRRRRRR -->
                <span class="pointer" onclick="on_skill_click(document.querySelector('#skill-grid').children[$(this.parentNode.parentNode.parentNode).attr('data-box-num')])">&times;</span>
            </div>
        </div>
        <div class="skill-panel-body">
            <p class="description">${element.dataset.description}</p>
        </div>
        <div class="skill-panel-footer">
            <div class="links">
                ${link_string}
            </div>
        </div>
    `;

    // Find the parent grid
    const skillGrid = document.getElementById('skill-grid');
    for(let box of skillGrid.children) {
        box.classList.remove('active');
    }
    element.classList.add('active');

    // Insert the panel after the clicked element's row
    let boxes = Array.from(skillGrid.children);
    let index = boxes.indexOf(element);

    box_padding = parseInt(getComputedStyle(element).padding.replace('px', ''));
    box_width = (element.clientWidth + (box_padding * 1.5));
    // Determine the number of boxes per row (assuming it's consistent)
    let boxesPerRow = Math.floor(skillGrid.clientWidth / (box_width));

    console.log(boxesPerRow);
    console.log(skillGrid.clientWidth);
    console.log(element.clientWidth);
    console.log(getComputedStyle(element).padding)

    // Calculate the insertion index
    let insertAfterIndex = Math.ceil((index + 1) / boxesPerRow) * boxesPerRow - 1;

    if (insertAfterIndex >= boxes.length) {
        skillGrid.appendChild(panel);
    } else {
        skillGrid.insertBefore(panel, boxes[insertAfterIndex + 1]);
    }

    $(panel).hide();
    $(panel).slideDown(skill_panel_animation_duration);
    $(panel).width((box_width * boxesPerRow) - box_padding * 4);
    // Get the index of the clicked element
    $(panel).attr("data-box-num", $(element).index());
    $(panel).attr("data-row-num", Math.ceil((index + 1) / boxesPerRow));
}

function convertRemToPixels(rem) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}