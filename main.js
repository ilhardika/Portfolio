function toggleDetail(e){
    const target = $(e.target)
    const item = $(target.parents('.about-exp-item'))
    const detail = $(item.children('.about-exp-item-detail'))

    if($(target).hasClass('active')){
        $(target).html('More info').removeClass('active')
    } else {
        $(target).html('Less info').addClass('active')
    }

    $(detail).slideToggle()
}

function onFormSubmit(e){
    e.preventDefault()
    const email = $('#inp_email')
    const subject = $('#inp_subject')
    const message = $('#inp_message')

    if(!$(email).val()){
        alert("Email is required")
    } else if(!$(subject).val()){
        alert("subject is required")
    } else if(!$(message).val()){
        alert("message is required")
    } else {
        alert("Form submitted")
        $(email).val("")
        $(subject).val("")
        $(message).val("")
    }
}