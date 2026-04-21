export const content = {
  es: {
    hero: {
      taglineTop: "Est. Guatemala",
      taglineBottomLeft: "Tu ritual diario.",
      taglineBottomRight: "Nuestro oficio oculto.",
      cta: "Entrar en la lista",
    },
    metadata: {
      title: "Secret Roast Coffee — Lo oculto del oficio",
      description: "Tu ritual diario, nuestro oficio oculto. Una tostaduría de café de especialidad próximamente en Ciudad de Guatemala.",
      ogTitle: "Secret Roast Coffee",
      ogDescription: "El secreto está en el tueste.",
    },
    theSecret: {
      bgText: "EL SECRETO",
      label: "001 / La Historia",
      quote: "El secreto está en el tueste.",
      body1: "Cada gran taza comienza antes de la molienda. Comienza en las tierras altas de Guatemala, donde la altitud se encuentra con la obsesión.",
      body2: "No solo abrimos una cafetería. Construimos un refugio para el oficio. Un lugar donde el ritual es sagrado y el tueste nunca se apresura.",
      comingSoon: "PRÓXIMAMENTE EN CIUDAD DE GUATEMALA",
    },
    origin: {
      label: "002 / ORIGEN",
      headline: "De las ",
      headlineItalic: "Tierras Altas.",
      body: "Cultivado en suelo volcánico a gran altitud. Cosechado a mano. Tostado con intención.",
      pills: {
        altitude: "1,500m+ Altitud",
        origin: "Origen Único",
        roast: "Tueste Lento",
      }
    },
    productReveal: {
      label: "003 / EL TUESTE",
      headline: "La alineación ",
      headlineItalic: "es clasificada.",
      body: "Tres tuestes. Cada uno con una historia. El anuncio completo llega en el lanzamiento.",
      cta: "ÚNETE A LA LISTA PARA ACCESO ANTICIPADO",
      redacted: "[CLASIFICADO]",
    },
    leadCapture: {
      label: "004 / ÚNETE AL CÍRCULO INTERNO",
      headline: "Sé el primero. Sé fundador.",
      body: "Reclama tu lugar para precios de fundador y acceso anticipado. Restringido a los primeros 500 miembros.",
      spots: "Quedan 412/500 lugares",
      footer: "El acceso se cierra a los 500 miembros. Sin spam. Solo lo bueno.",
      form: {
        placeholder: "tu@email.com",
        cta: "RECLAMAR LUGAR",
        submitting: "RECLAMANDO...",
        success: {
          headline: "Bienvenido al Círculo Oculto.",
          subheadline: "El secreto te encontrará pronto.",
        }
      }
    },
    comingSoon: {
      label: "EL REFUGIO SE ESTÁ CONSTRUYENDO",
      marquee: "PRÓXIMAMENTE · SECRET ROAST COFFEE · CIUDAD DE GUATEMALA · ",
      igQuote: "\"Tostamos las reglas. Construimos el refugio. PRÓXIMAMENTE\"",
    },
    footer: {
      branding: "Guatemala para el Mundo",
      privacy: "Privacidad",
    }
  },
  en: {
    hero: {
      taglineTop: "Est. Guatemala",
      taglineBottomLeft: "Your daily ritual.",
      taglineBottomRight: "Our hidden craft.",
      cta: "Enter the list",
    },
    metadata: {
      title: "Secret Roast Coffee — The Hidden Craft",
      description: "Your daily ritual, our hidden craft. A specialty coffee roastery coming soon to Guatemala City.",
      ogTitle: "Secret Roast Coffee",
      ogDescription: "The secret is in the roast.",
    },
    theSecret: {
      bgText: "THE SECRET",
      label: "001 / The Story",
      quote: "The secret is in the roast.",
      body1: "Every great cup starts before the grind. It starts in the highlands of Guatemala, where altitude meets obsession.",
      body2: "We didn't just open a coffee shop. We built a shelter for craft. A place where the ritual is sacred and the roast is never rushed.",
      comingSoon: "COMING SOON TO GUATEMALA CITY",
    },
    origin: {
      label: "002 / ORIGEN",
      headline: "From the ",
      headlineItalic: "Highlands.",
      body: "Grown in volcanic soil at altitude. Harvested by hand. Roasted with intent.",
      pills: {
        altitude: "1,500m+ Altitude",
        origin: "Single Origin",
        roast: "Slow Roast",
      }
    },
    productReveal: {
      label: "003 / THE ROAST",
      headline: "The lineup ",
      headlineItalic: "is classified.",
      body: "Three roasts. Each with a story. The full reveal drops at launch.",
      cta: "JOIN THE LIST FOR EARLY ACCESS",
      redacted: "[REDACTED]",
    },
    leadCapture: {
      label: "004 / JOIN THE INNER CIRCLE",
      headline: "Be first. Be a founder.",
      body: "Claim your spot for founding pricing and early access. Restricted to first 500 members.",
      spots: "Spot 412/500 remaining",
      footer: "Access closes at 500 members. No spam. Just the good stuff.",
      form: {
        placeholder: "your@email.com",
        cta: "CLAIM SPOT",
        submitting: "CLAIMING...",
        success: {
          headline: "Welcome to the Hidden Circle.",
          subheadline: "The secret finds you soon.",
        }
      }
    },
    comingSoon: {
      label: "THE SHELTER IS BEING BUILT",
      marquee: "COMING SOON · SECRET ROAST COFFEE · GUATEMALA CITY · ",
      igQuote: "\"We toast the rules. We built the shelter. COMING SOON\"",
    },
    footer: {
      branding: "Guatemala to the World",
      privacy: "Privacy",
    }
  }
};

export type Language = 'en' | 'es';
export type SiteContent = typeof content.en;
