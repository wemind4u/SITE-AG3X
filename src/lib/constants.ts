export const SITE_CONFIG = {
  name: "AG3X Marketing",
  description: "Estratégia, conteúdo e presença digital com a sua cara",
  url: "https://ag3x.marketing",
  links: {
    instagram: "https://www.instagram.com/ag3x_marketing/",
    whatsapp: "https://wa.me/5511947029960", // Replace with actual WhatsApp number
    facebook: "#",
    linkedin: "#",
  },
};

export const SERVICES = [
  {
    id: "social-media",
    title: "Gestão de Redes Sociais",
    description:
      "Planejamento de conteúdo mensal, criação de artes e legendas, postagens programadas, captação de conteúdo, relatórios mensais.",
    icon: "InstagramIcon",
    price: "Consulte",
    isMain: true,
  },
    
  {
    id: "landing-pages",
    title: "Criação de landing pages",
    description:
      "Páginas de conversão otimizadas para captar leads e converter visitantes em clientes.",
    icon: "LayoutIcon",
    price: "Sob consulta",
    isMain: false,
  },
  {
    id: "branding",
    title: "Branding",
    description:
      "Construção e fortalecimento da sua marca com identidade visual marcante e comunicação consistente.",
    icon: "PaletteIcon",
    price: "Sob consulta",
    isMain: false,
  },
  {
    id: "video",
    title: "Edição de vídeos",
    description:
      "Edição profissional para conteúdos dinâmicos que capturam a atenção do seu público.",
    icon: "VideoIcon",
    price: "Sob consulta",
    isMain: false,
  },
  {
    id: "consultoria",
    title: "Consultorias estratégicas",
    description:
      "Orientação personalizada para impulsionar sua presença digital e alcançar seus objetivos de negócio.",
    icon: "LightbulbIcon",
    price: "Sob consulta",
    isMain: false,
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Cliente A",
    role: "Empresa",
    content:
      "A AG3X revolucionou nosso Instagram. Passamos a ter um visual profissional e engajamento de verdade.",
    avatar: "/avatar-1.png",
  },
  {
    id: 2,
    name: "Cliente B",
    role: "Empresa",
    content:
      "Pontuais, criativos e com uma visão estratégica. Vale cada centavo.",
    avatar: "/avatar-2.png",
  },
  {
    id: 3,
    name: "Cliente C",
    role: "Empresa",
    content:
      "Desde que começamos a trabalhar com a AG3X, nossas métricas de engajamento cresceram mais de 200%. Resultados reais!",
    avatar: "/avatar-3.png",
  },
];

export const TEAM = [
  {
    id: 1,
    name: "Arthur Alvarenga",
    role: "Co-fundador",
    bio: "Especialista em estratégia digital",
    avatar: "/lovable-uploads/arthur.png",
    social: {
      instagram: "https://www.instagram.com/arthuralvarenga/",
      linkedin: "https://www.linkedin.com/in/arthur-alvarenga-578a5949/",
    },
  },
  {
    id: 2,
    name: "Vinicius Godoi",
    role: "Co-fundador",
    bio: "Expert em design e produção de conteúdo para redes sociais.",
    avatar: "/lovable-uploads/vini_godoi.png",
    social: {
      instagram: "https://www.instagram.com/godoivini/",
      linkedin: "#",
    },
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Como aumentar o engajamento no Instagram em 2025",
    excerpt:
      "Dicas práticas para fazer seu conteúdo performar melhor na era dos algoritmos.",
    image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png",
    date: "2025-05-15",
    slug: "como-aumentar-engajamento-instagram-2025",
  },
  {
    id: 2,
    title: "O que postar no LinkedIn para atrair clientes B2B",
    excerpt:
      "Estratégias comprovadas para converter conexões em leads qualificados.",
    image: "/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png",
    date: "2025-05-10",
    slug: "o-que-postar-linkedin-atrair-clientes-b2b",
  },
  {
    id: 3,
    title: "Tendências de conteúdo para redes sociais",
    excerpt:
      "O que vai bombar nas redes sociais nos próximos meses? Descubra aqui.",
    image: "/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png",
    date: "2025-05-05",
    slug: "tendencias-conteudo-redes-sociais",
  },
];

export const STATS = [
  { id: 1, label: "Projetos entregues", value: "80+" },
  { id: 2, label: "Empresas ativas", value: "5+" },
  { id: 3, label: "Especialistas", value: "100%" },
];
