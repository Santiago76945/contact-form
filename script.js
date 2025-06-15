// script.js
document.addEventListener('DOMContentLoaded', () => {
    const lang = navigator.language || navigator.userLanguage;
    const isEs = lang.startsWith('es');

    const texts = {
        es: {
            title: 'Formulario de contacto',
            subtitle: 'Completa la siguiente información para contactarme.',
            reason: 'Motivo de contacto',
            optionPersonal: 'Personal',
            optionProfessional: 'Profesional',
            whatsapp: 'Tu número de WhatsApp',
            name: 'Tu nombre completo',
            message: 'Tu mensaje',
            submit: 'Enviar'
        },
        en: {
            title: 'Contact Form',
            subtitle: 'Please complete the following information to contact me.',
            reason: 'Reason for Contact',
            optionPersonal: 'Personal',
            optionProfessional: 'Professional',
            whatsapp: 'Your WhatsApp number',
            name: 'Your full name',
            message: 'Your message',
            submit: 'Submit'
        }
    };

    const t = isEs ? texts.es : texts.en;

    document.getElementById('title').textContent = t.title;
    document.getElementById('subtitle').textContent = t.subtitle;
    document.getElementById('label-reason').textContent = t.reason;

    const select = document.getElementById('reason');
    select.options[0].textContent = t.optionPersonal;
    select.options[1].textContent = t.optionProfessional;

    document.getElementById('label-whatsapp').textContent = t.whatsapp;
    document.getElementById('label-name').textContent = t.name;
    document.getElementById('label-message').textContent = t.message;
    document.getElementById('submit-button').textContent = t.submit;
});
