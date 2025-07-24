
import React, { useState, useEffect } from "react";
import { ExternalLink, Instagram } from "lucide-react";

interface InstagramPost {
  id: string;
  media_url: string;
  media_type: string;
  caption?: string;
  permalink: string;
  timestamp: string;
}

const InstagramPosts = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Placeholder posts for demonstration
  const placeholderPosts = [
    {
      id: "1",
      media_url: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png",
      media_type: "IMAGE",
      caption: "Como aumentar o engajamento no Instagram em 2025",
      permalink: "https://instagram.com/ag3x_marketing",
      timestamp: "2025-01-15T10:00:00Z"
    },
    {
      id: "2",
      media_url: "/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png",
      media_type: "IMAGE",
      caption: "O que postar no LinkedIn para atrair clientes B2B",
      permalink: "https://instagram.com/ag3x_marketing",
      timestamp: "2025-01-10T15:30:00Z"
    },
    {
      id: "3",
      media_url: "/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png",
      media_type: "IMAGE",
      caption: "Tendências de conteúdo para redes sociais",
      permalink: "https://instagram.com/ag3x_marketing",
      timestamp: "2025-01-05T12:00:00Z"
    }
  ];

  useEffect(() => {
    const loadInstagramPosts = async () => {
      try {
        setLoading(true);
        
        // TODO: Implementar chamada real para Instagram API
        // const response = await fetch('/api/instagram-posts');
        // const data = await response.json();
        // setPosts(data.data || []);
        
        // Usar posts placeholder por enquanto
        await new Promise(resolve => setTimeout(resolve, 1000));
        setPosts(placeholderPosts);
        
      } catch (err) {
        console.error('Erro ao carregar posts do Instagram:', err);
        setError('Erro ao carregar posts do Instagram');
        setPosts(placeholderPosts); // Fallback para posts placeholder
      } finally {
        setLoading(false);
      }
    };

    loadInstagramPosts();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-gray-800 rounded-3xl h-48 mb-4"></div>
            <div className="bg-gray-800 rounded h-4 mb-2"></div>
            <div className="bg-gray-800 rounded h-4 w-3/4"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error && posts.length === 0) {
    return (
      <div className="text-center py-12">
        <Instagram className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-400 mb-4">{error}</p>
        <a 
          href="https://www.instagram.com/ag3x_marketing/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-[#00FFC2] hover:text-[#00FFC2]/80 transition-colors"
        >
          Ver no Instagram <ExternalLink className="ml-2 w-4 h-4" />
        </a>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.slice(0, 6).map((post) => (
        <div
          key={post.id}
          className="group relative overflow-hidden rounded-3xl bg-gray-900 hover:bg-gray-800 transition-colors border border-gray-800 h-full"
        >
          <div className="relative h-48 overflow-hidden rounded-t-3xl">
            <img
              src={post.media_url}
              alt={post.caption || "Instagram post"}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
            <div className="absolute top-4 right-4">
              <Instagram className="w-6 h-6 text-white/80" />
            </div>
          </div>
          
          <div className="p-6">
            <span className="text-xs font-medium text-[#00FFC2] mb-2 block">
              {new Date(post.timestamp).toLocaleDateString('pt-BR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </span>
            
            <p className="text-gray-400 mb-4 text-sm line-clamp-3">
              {post.caption || "Confira este conteúdo no nosso Instagram"}
            </p>
            
            <div className="mt-auto">
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#00FFC2] font-medium group-hover:underline"
              >
                Ver no Instagram <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          </div>
          
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#00FFC2]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstagramPosts;
