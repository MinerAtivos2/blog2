import { useParams, useNavigate } from "react-router-dom";
import { posts } from "@/data/posts";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import { useEffect } from "react";

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post não encontrado</h1>
          <p className="text-muted-foreground mb-8">
            O post que você está procurando não existe ou foi removido.
          </p>
          <Button onClick={() => navigate("/")}>
            Voltar para o Blog
          </Button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-6 px-4 shadow-lg">
        <div className="container mx-auto max-w-4xl">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-primary-foreground hover:bg-primary-foreground/20 mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="bg-card rounded-lg shadow-xl overflow-hidden">
          {post.imageUrl && (
            <div className="w-full h-96 overflow-hidden">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} de leitura</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => {
                const variants = ["blue", "green", "purple", "orange", "pink", "accent"] as const;
                const variant = variants[index % variants.length];
                return (
                  <Badge key={tag} variant={variant} className="flex items-center gap-1">
                    <Tag className="h-3 w-3" />
                    {tag}
                  </Badge>
                );
              })}
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-xl text-muted-foreground italic border-l-4 border-primary pl-4 mb-8">
                {post.excerpt}
              </p>
            </div>

            <div 
              className="prose prose-lg max-w-none text-foreground"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }}
            />
          </div>
        </article>

        <div className="mt-12 p-8 bg-muted rounded-lg">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-2xl">
                {post.author.charAt(0)}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Sobre o autor</h3>
              <p className="text-muted-foreground mb-4">
                {post.author} é especialista em investimentos e análise de mercado.
              </p>
              <Button variant="outline" onClick={() => navigate("/")}>
                Ver mais posts
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Post;
