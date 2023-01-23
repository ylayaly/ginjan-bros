function setTab(el){
    $(el).parent().find('.btn-tab').removeClass("active")
    $(el).addClass("active")
    var id = $(el).data("active")
    $(el).closest(".tabs").find(".tab-body").removeClass("active")
    $(id).addClass("active")
    return false
}
function setTabProduct(el){
    $(el).parent().find('.btn-tab').removeClass("active")
    $(el).addClass("active")
    var id = $(el).data("active")
    $(el).closest(".product-tabs").find(".tab-body").removeClass("active")
    $(".product-tabs").find(id).addClass("active")
    return false
}

$(".bg-menu-header").click(() => {
    $(".bg-menu-header").toggleClass("open")
    $(".mobile-menu").toggleClass("open")
    $(".announcement-text").toggleClass("hidden")
})

$(".bg-menu-careers").click(() => {
    $(".form_careers").removeClass("open")
    setTimeout(() => {
       $("#shopify-section-header-gb").removeAttr("style");
    }, 600)
    
})

$(".plus-quantity").click(function(){
    var type = $(this).data("type")
    var val = $(".product-quantity-"+type).val() === '' ? 0 : $(".product-quantity-"+type).val()
    $(".product-quantity-"+type).val(parseInt(val) + 1)
    $("[data-quantity-input]").val($(".product-quantity-"+type).val())
})

$(".minus-quantity").click(function(){
    var type = $(this).data("type")
    if($(".product-quantity-"+type).val() > 1){
        $(".product-quantity-"+type).val(parseInt($(".product-quantity-"+type).val()) - 1)
    }
    $("[data-quantity-input]").val($(".product-quantity-"+type).val())
})

$(".open-form-careers").click(function(ev){
    var val = $(this).data("value")
    $("#career-item").val(val);
    
    $("html, body").animate({ scrollTop: 0 }, "slow", 
        function(){
        $(".form_careers").addClass("open")
    });
  
    $("#shopify-section-header-gb").css("z-index", "10");
    
    return false
})


$(".form_careers .contact_form").submit(function(){
    $(".form_careers").removeClass("open")
    setTimeout(() => {
       $("#shopify-section-header-gb").removeAttr("style");
    }, 600)
})

function goToMenu(){
    var el = document.getElementById("see-menu");
    const y = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: y, behavior: 'smooth'});
}

$(".product-form").on("change", ".rc-radio__input", () => {
    setTimeout(function(){
        var price = $("#regular-price").text()
        price = price.replace("$", "")
        $("[data-product-regular-price]").text(Number(price))
    }, 120)


});

$(document).ready(function(){
    function setUnitPrice(){ 
        if($(".product-single").find("[data-unit-price]").length > 0){
            if($(".rc-option__price").length > 0){
                $(".rc_widget__price--onetime").find("i").remove()
                $(".rc_widget__price--onetime").html($(".rc_widget__price--onetime").html() + "<i class='not-italic font-light ml-2'>"+$(".product-single").find("[data-unit-price]").data("unit-price")+"</i>")
                if($("[data-price-onetime]").html() == "" || $("[data-price-subsave]").html() == ""){ setTimeout(function(){ setUnitPrice() }, 120) }
                $(".rc_widget__price--subsave").find("i").remove()
                $(".rc_widget__price--subsave").html($(".rc_widget__price--subsave").html() + "<i class='not-italic font-light ml-2'>"+$(".product-single").find("[data-unit-price-subscribe]").data("unit-price-subscribe")+"</i>")

            }else{
                setTimeout(function(){
                    setUnitPrice()
                }, 120)
            }
        }
    }

    if( typeof p_plans !== 'undefined' && p_plans.hasOwnProperty("selling_plan_groups") && p_plans.selling_plan_groups.length > 0 ){
        setUnitPrice()
        $(".product-form-product-template-gb").on("click", "[data-template-legacy-radio] .rc-option", function(){
            var type = $(this).hasClass("rc_widget__option--subsave") ? "subsave" : "onetime"

            if( $("[data-widget-container-wrapper] [data-widget]").css("display") === "block"){
                if(type === "onetime"){
                    $(".rc_popup").fadeTo("slow", 0, () => {
                        $(".rc_popup").css("display", "none")
                    })
                }
                $("[data-widget-container-wrapper] [data-widget]").fadeTo( "slow" , 0, function() {
                    $("[data-widget-container-wrapper] [data-widget]").css("display", "none")
                    $("[data-widget-container-wrapper]").css({"order": "4", "margin-top" : "0px"})
                    $("[data-widget-button][data-type='"+type+"']").css("display" ,"grid")
                    $("[data-widget-button][data-type='"+type+"']").fadeTo("slow", 1)
                });
            }

            setUnitPrice()
        })

        $("#selling_plan").click(() => {
            // $("#selling_plan").toggleClass("hidden")
            $("#selling_plan_dropdown").toggleClass("hidden")
        })

        $(".selling_plan_item").click(function(ev){
            ev.preventDefault();
            $("#selling_plan span").text($(this).text())
            $("#selling_plan_dropdown").toggleClass("hidden")
            // $("#selling_plan").toggleClass("hidden")
            $("[data-plans-item]").css("display", "block")
            $("[data-plans-item='"+$(this).data("value")+"']").css("display", "none")
            $("[data-plans-dropdown]").val($(this).data("value"))
            $("#selling_plan_dropdown").find("a").removeClass("font-medium")
            $(this).addClass("font-medium")
            return false;
        })
    }


    $("[data-withow-plan]").click(function(){
        $(this).addClass("hidden")
        $("[data-widget-button-onetime]").removeClass("hidden")
        $("[data-widget-button-onetime]").fadeTo("slow", 1)
    })

    $("[data-with-subscription]").click(function(){
        $(this).addClass("hidden")
        $("[data-widget-button][data-type='subsave']").removeClass("hidden")
        $("[data-widget-button][data-type='subsave']").fadeTo("slow", 1)
    })

    formatRecharge()

    function formatRecharge(){ 
        if($("[data-label-onetime]").length > 0){
            $("[data-label-onetime]").append("<span class='per-bottle'>"+ $("[data-bottel-onetime]").data("bottel-onetime") +"</span>")
            $("[data-label-subsave]").append("<span class='per-bottle'>"+ $("[data-bottel-subsave]").data("bottel-subsave") +"</span>")
            if($("[data-bottel-onetime]").data("compare-at-price") != ""){
                $(".rc_widget__option__selector label.rc-radio__label").addClass("compare-price")
                $("[data-label-onetime]").append("<div class='compare-at-price'>"+ $("[data-bottel-onetime]").data("compare-at-price") +"</div>") 
                $("[data-label-subsave]").append("<div class='compare-at-price'>"+ $("[data-bottel-onetime]").data("compare-at-price") +"</div>")
            }
        }else{
            setTimeout(function(){
                formatRecharge()
            }, 120)
        }
    }


    $("[data-widget-button]").mousedown(function(){
        let type = $(this).data("type")
        $("[data-radio-"+type+"]").prop("checked", true).trigger("click");
        $("[data-quantity-input]").val($(".product-quantity-"+type).val())
    })

    $('#product-gallery').slick();

    function setRecommendations(){
        if($("#product-recommendations__list").length > 0)
            $("#product-recommendations__list").slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive : [
                    {
                        breakpoint: 1024,
                        settings: {
                          slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
        else{
            setTimeout(function(){
                setRecommendations()
            }, 600)
        }
    }

    setRecommendations();

    $(".product-form__item").change(function(){
        var value = $(".product-form__item").map(function(){
            return $(this).find("select").val()
        }).toArray().join(" / ")
        var p = p_plans.variants.find((v) => {
            return v.title == value
        })
        if(p && p.featured_image){
            $("#product-gallery").fadeTo("slow", 0, function(){
                $("#product-gallery").html(`
                <div class="px-14 md:px-20 xl:px-40 flex items-center" data-slick-index="10" aria-hidden="true" role="option" tabindex="-1">    
                    <img class="mx-auto max-h-[300px] lg:max-h-[700px] max-w-[90%]" src="${p.featured_image.src}" alt="Subscribe">
                </div>`).fadeTo("slow", 1)
            })
            
        }

    })

})

$(() => {
    $("#share-twitter").click(function(){
        window.open("https://twitter.com/share?url="+window.location.href, "_blank", "width=600,height=600")
        return false
    })
    $("#share-facebook").click(function(){
        window.open("https://www.facebook.com/sharer/sharer.php?u="+window.location.href, "", "width=600,height=600")
        return false
    })
    $("#share-link").click(function(){
        var input = document.createElement("input");
        input.setAttribute('value', window.location.href.split('?')[0].split('#')[0]);
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
    })
})