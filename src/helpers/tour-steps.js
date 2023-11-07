export const steps = [
    {
      target: "#step-intro",
      header: {
        title: "Welcome Aboard!"
      },
      content: "Kickstart your journey with handy <strong>side buttons</strong> – your gateway to awesome!",
      params: {
        placement: 'top'
      },
     
    },
    {
      target: "#setting",
      header: {
        title: "Open Setting & Tailor Your Space"
      },
      content: "Dive into <strong>Settings</strong> and tailor your experience. Pick a theme, tweak components, make it yours!",
      params: {
        placement: 'top',
        highlight: true
      },
      requireComponent:true,
      trigger : "openSettings",
    },
    {
      target: ".switch-theme",
      header: {
        title: "Theme Alchemy"
      },
      content: "Transform the vibe with a click – which <strong>glitch level</strong> speaks to you today?",
      params: {
        highlight: true,
        placement: 'bottom',
      },
    },
    {
      target: ".style-options",
      header: {
        title: "Layouts at a Glance"
      },
      content: "Switch between a sleek 'Compact' or a spacious 'Two-Column' layout to suit your style.",
      params: {
        placement: "top"
      }
    },
    {
      target: "#contact",
      header: {
        title: "Say Hello!"
      },
      content: "Got a question or just want to chat? Drop a line here in this nifty contact form.",
      params: {
        placement: "top",
        highlight: true,
      },
      requireComponent:true,
      trigger : "openContact",
    },
    {
      target: ".contact-form",
      header: {
        title: "Connect with Me"
      },
      content: "Reach out and let's start a conversation. I'm all ears for your thoughts and feedback!",
      params: {
        placement: "top"
      }
    },
    {
      target: "#step-intro",
      content: "That's a wrap! Explore, enjoy, and stay tuned for more features. Let's keep in touch.",
      params: {
        placement: "top"
      }
    },
    
  ];
  
  export default steps;
  