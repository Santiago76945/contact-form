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
            whatsappPlaceholder: '+54 9 351 1234567',
            name: 'Tu nombre completo',
            namePlaceholder: 'Juan Pérez',
            message: 'Tu mensaje',
            messagePlaceholder: 'Escribe tu mensaje aquí...',
            submit: 'Enviar'
        },
        en: {
            title: 'Contact Form',
            subtitle: 'Please complete the following information to contact me.',
            reason: 'Reason for Contact',
            optionPersonal: 'Personal',
            optionProfessional: 'Professional',
            whatsapp: 'Your WhatsApp number',
            whatsappPlaceholder: '+1 555 1234567',
            name: 'Your full name',
            namePlaceholder: 'John Doe',
            message: 'Your message',
            messagePlaceholder: 'Type your message here...',
            submit: 'Submit'
        }
    };

    const t = isEs ? texts.es : texts.en;

    // H1 / H2
    document.getElementById('title').textContent = t.title;
    document.getElementById('subtitle').textContent = t.subtitle;

    // Motivo de contacto
    document.getElementById('label-reason').textContent = t.reason;
    const reasonSelect = document.getElementById('reason');
    reasonSelect.options[0].textContent = t.optionPersonal;
    reasonSelect.options[1].textContent = t.optionProfessional;

    // WhatsApp
    document.getElementById('label-whatsapp').textContent = t.whatsapp;
    document.getElementById('whatsapp').placeholder = t.whatsappPlaceholder;

    // Nombre
    document.getElementById('label-name').textContent = t.name;
    document.getElementById('name').placeholder = t.namePlaceholder;

    // Mensaje
    document.getElementById('label-message').textContent = t.message;
    document.getElementById('message').placeholder = t.messagePlaceholder;

    // Botón
    document.getElementById('submit-button').textContent = t.submit;
});
