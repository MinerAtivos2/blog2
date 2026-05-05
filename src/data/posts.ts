export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string; // formato: YYYY-MM-DD
  tags: string[];
  readTime: string;
  imageUrl?: string;
}

export const posts: BlogPost[] = [
  {
    id: "1",
    title: "Análise do Mercado de Ações em 2024 t2 ",
    excerpt: "Uma visão abrangente sobre as tendências do mercado de ações e as principais oportunidades para investidores em 2024.",
    content: '<iframe src="/posts/post2.html" width="100%" height="800px" style="border:none;"></iframe>',
    author: "João Silva",
    date: "2024-03-15",
    tags: ["Ações", "Mercado", "Análise"],
    readTime: "5 min",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop"
  },
  {
    id: "2",
    title: "Diversificação de Carteira: Estratégias Essenciais",
    excerpt: "Aprenda como diversificar sua carteira de investimentos para minimizar riscos e maximizar retornos.",
    content: "Conteúdo completo do post aqui...",
    author: "Maria Santos",
    date: "2024-03-10",
    tags: ["Estratégia", "Diversificação", "Portfolio"],
    readTime: "7 min"
  },
  {
    id: "3",
    title: "Forecasting!",
    excerpt: "Análise de forecasting para mais de 300 ativos, destacando tendências de médio prazo e insights baseados em Machine Learning.",
    content: `<div id="header"><h1 class="title toc-ignore">Forecasting!</h1><h4 class="author">Lucas</h4><h4 class="date">2025-10-17</h4></div><p>Output dos modelos agregados processados com base no fechamento do dia 17/10, verificando tendências de médio prazo a partir do primeiro pregão subsequente para cada um dos mais de 300 ativos negociados na bolsa de valores. O gráfico a seguir mostra os ativos que apresentaram f1 score igual ou superior a 70%:</p><p><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABUAAAAPgCAYAAAC8sJdtAAAAAXNSR0IArs4c6QAAIABJREFUeJzs7f+Pnf957/u/f5I32f22b8l6tW/JepdtvVqW5G3ZkiVLlmRJliVZlmVZlmVjWbYsy5ItW7Zs2bIsy8aypY/t06/P+T7P85zn+TzP+z7P8zz/eZ5zZufO3DmzMxkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA-Xmx1G" alt="Gráfico de Forecasting"></p><style>.tv-container { width: 100%; height: 600px; margin-bottom: 40px; overflow: hidden; }</style><h4><b> Acompanhe a visão intraday de #CEAB3 </b></h4><div class="tv-container"><div id="tv_CEAB3" class="tradingview-widget"></div></div><script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script><script type="text/javascript">new TradingView.widget({"autosize": true, "symbol": "B3:CEAB3", "interval": "240", "timezone": "America/Sao_Paulo", "theme": "dark", "style": "1", "locale": "br", "enable_publishing": false, "allow_symbol_change": true, "container_id": "tv_CEAB3"});</script><p>Por outro lado, os ativos 18.18, 20.4 e 20.38 apresentaram viés de baixa para swing trading.</p><p>Os dados apresentados resultaram de algoritmos de aprendizado de máquina (ML) com base histórica e comportamental de cada ativo, além da apuração de indicadores técnicos e variáveis formadas a partir de informações endógenas e exógenas. Importante destacar que, além dessas informações, é necessário combinar com análises técnicas e fundamentalistas complementares. Mas isso não basta para o processo decisório, pois em alguns casos, ocorrem oscilações decorrentes de fatores e notícias relacionadas a empresas, política e economia, descolando as cotações dos modelos de forecast. Por isso, cautela e observação são fundamentais para todos os cenários, pois o mercado possui comportamento caótico, com volatilidade ampla e sensibilidade ao cenário político econômico.</p><p>Até a próxima!</p><p><em>Exoneração de responsabilidade</em></p>`,
    author: "Lucas",
    date: "2025-10-17",
    tags: ["Novidade","Análise"],
    readTime: "3 min"
  },
  {
    id: "4",
    title: "Post de Exemplo: HTML Direto",
    excerpt: "Este é um exemplo de como adicionar um post usando HTML diretamente no código, conforme descrito no TUTORIAL.md.",
    content: "<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guia Definitivo da Teoria de Markowitz para Investidores Brasileiros - Minerativos</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary-color: #00C853; /* Verde vibrante */
            --secondary-color: #212121; /* Dark Gray */
            --background-color: #121212; /* Darker background */
            --text-color: #E0E0E0; /* Light Gray for text */
            --heading-color: #FFFFFF; /* White for headings */
            --card-background: #1E1E1E; /* Slightly lighter dark for cards */
            --border-color: #333333;
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--background-color);
            color: var(--text-color);
            line-height: 1.6;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            min-height: 100vh;
        }

        .container {
            width: 100%;
            max-width: 800px;
            margin: 20px;
            padding: 30px;
            background-color: var(--secondary-color);
            border-radius: 12px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        }

        header {
            text-align: center;
            margin-bottom: 40px;
        }

        header h1 {
            color: var(--heading-color);
            font-size: 2.8em;
            margin-bottom: 10px;
            line-height: 1.2;
        }

        header p.meta {
            color: var(--primary-color);
            font-size: 0.9em;
            font-weight: 600;
        }

        .content h2 {
            color: var(--heading-color);
            font-size: 1.8em;
            margin-top: 30px;
            margin-bottom: 15px;
            border-bottom: 2px solid var(--border-color);
            padding-bottom: 10px;
        }

        .content h3 {
            color: var(--primary-color);
            font-size: 1.4em;
            margin-top: 25px;
            margin-bottom: 10px;
        }

        .content p {
            margin-bottom: 1em;
            font-size: 1.05em;
        }

        .content ul,
        .content ol {
            margin-bottom: 1em;
            padding-left: 25px;
        }

        .content li {
            margin-bottom: 0.5em;
        }

        .image-container {
            margin: 30px 0;
            text-align: center;
        }

        .image-container img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .image-container figcaption {
            font-size: 0.85em;
            color: #B0B0B0;
            margin-top: 10px;
        }

        .infographic-placeholder {
            background-color: var(--card-background);
            border: 2px dashed var(--primary-color);
            padding: 40px 20px;
            margin: 30px 0;
            text-align: center;
            font-style: italic;
            color: var(--primary-color);
            border-radius: 8px;
            font-size: 1.1em;
        }

        .chart-placeholder {
            background-color: var(--card-background);
            border: 2px dashed #64B5F6; /* Azul para gráficos */
            padding: 40px 20px;
            margin: 30px 0;
            text-align: center;
            font-style: italic;
            color: #64B5F6;
            border-radius: 8px;
            font-size: 1.1em;
        }

        .call-to-action {
            background-color: var(--primary-color);
            color: var(--heading-color);
            padding: 20px;
            text-align: center;
            border-radius: 8px;
            margin-top: 40px;
            font-size: 1.2em;
            font-weight: 700;
        }

        .call-to-action a {
            color: var(--heading-color);
            text-decoration: none;
            display: inline-block;
            margin-top: 15px;
            padding: 12px 25px;
            background-color: #009624; /* Um verde mais escuro para o botão */
            border-radius: 6px;
            transition: background-color 0.3s ease;
        }

        .call-to-action a:hover {
            background-color: #00791E;
        }

        footer {
            text-align: center;
            margin-top: 50px;
            font-size: 0.8em;
            color: #888888;
        }

        .disclaimer {
            font-size: 0.8em;
            color: #FFC107; /* Amarelo para avisos */
            background-color: #333333;
            padding: 15px;
            border-radius: 8px;
            margin-top: 30px;
            text-align: center;
        }

        @media (max-width: 768px) {
            .container {
                margin: 10px;
                padding: 20px;
            }

            header h1 {
                font-size: 2em;
            }

            .content h2 {
                font-size: 1.5em;
            }

            .content h3 {
                font-size: 1.2em;
            }
        }
    </style>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
    <div class="container">
        <header>
            <h1>Guia Definitivo da Teoria de Markowitz para Investidores Brasileiros</h1>
            <p class="meta">Por Equipe Minerativos | 06 de Maio de 2026 | Categoria: Otimização de Portfólio</p>
        </header>

        <div class="content">
            <p>No dinâmico mercado financeiro brasileiro, a busca por retornos otimizados e riscos controlados é uma constante para qualquer investidor. É nesse cenário que a <strong>Teoria Moderna de Portfólio (TMP)</strong>, desenvolvida por Harry Markowitz, se torna uma ferramenta indispensável. Mas como aplicá-la de forma eficaz na B3?</p>

            <h2>O que é a Teoria de Markowitz?</h2>
            <p>A Teoria de Markowitz, laureada com o Prêmio Nobel, revolucionou a forma como entendemos a construção de carteiras de investimento. Sua premissa central é que o investidor não deve focar apenas no retorno esperado de um ativo individual, mas sim na relação risco-retorno do portfólio como um todo. A diversificação inteligente, combinando ativos que não se movem na mesma direção, pode reduzir o risco total da carteira sem sacrificar o retorno esperado.</p>

            <h3>Risco, Retorno e Diversificação</h3>
            <p>Markowitz introduziu conceitos cruciais como:</p>
            <ul>
                <li><strong>Retorno Esperado:</strong> A média ponderada dos retornos possíveis de um ativo ou carteira.</li>
                <li><strong>Risco (Volatilidade):</strong> Medido pelo desvio padrão dos retornos, indicando a dispersão dos resultados em torno da média.</li>
                <li><strong>Correlação:</strong> A forma como os retornos de dois ativos se movem em relação um ao outro. Ativos com baixa correlação são ideais para diversificação.</li>
            </ul>
            <p>A chave é encontrar a combinação de ativos que ofereça o maior retorno para um dado nível de risco, ou o menor risco para um dado nível de retorno. Isso nos leva ao conceito de <strong>Fronteira Eficiente</strong>.</p>

            
    <div style="display: flex; justify-content: space-around; flex-wrap: wrap; gap: 20px; margin: 30px 0;">
        <div style="background: #333; padding: 20px; border-radius: 10px; width: 200px; text-align: center; border-top: 4px solid #00C853;">
            <h4 style="margin: 0; color: #00C853;">PASSO 01</h4>
            <p style="font-size: 0.9em; margin: 10px 0 0;">Mineração de Dados Brutos</p>
        </div>
        <div style="background: #333; padding: 20px; border-radius: 10px; width: 200px; text-align: center; border-top: 4px solid #00C853;">
            <h4 style="margin: 0; color: #00C853;">PASSO 02</h4>
            <p style="font-size: 0.9em; margin: 10px 0 0;">Filtragem por IA (Outliers)</p>
        </div>
        <div style="background: #333; padding: 20px; border-radius: 10px; width: 200px; text-align: center; border-top: 4px solid #00C853;">
            <h4 style="margin: 0; color: #00C853;">PASSO 03</h4>
            <p style="font-size: 0.9em; margin: 10px 0 0;">Insight para Tomada de Decisão</p>
        </div>
    </div>
    

            <h2>Como a Minerativos Simplifica a Otimização de Portfólio?</h2>
            <p>Aplicar a Teoria de Markowitz manualmente pode ser complexo, exigindo cálculos estatísticos avançados e acesso a dados históricos. É aqui que a Minerativos se destaca. Nossa plataforma automatiza todo o processo, permitindo que você:</p>
            <ol>
                <li><strong>Analise a Correlação:</strong> Entenda como seus ativos se comportam juntos.</li>
                <li><strong>Calcule a Volatilidade:</strong> Avalie o risco de cada ativo e do seu portfólio.</li>
                <li><strong>Identifique a Fronteira Eficiente:</strong> Descubra as alocações ideais para maximizar seu retorno para o nível de risco desejado.</li>
                <li><strong>Rebalanceie com Precisão:</strong> Receba sugestões de rebalanceamento para manter seu portfólio na fronteira eficiente.</li>
            </ol>

            
        <div style="background: #1E1E1E; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <canvas id="markowitzChart"></canvas>
        </div>
        <script>
            const ctx = document.getElementById('markowitzChart').getContext('2d');
            new Chart(ctx, {
                type: 'scatter',
                data: {
                    datasets: [{
                        label: 'Portfólios Aleatórios',
                        data: Array.from({length: 100}, () => ({x: Math.random() * 10 + 5, y: Math.random() * 15 + 5})),
                        backgroundColor: 'rgba(255, 255, 255, 0.2)'
                    }, {
                        label: 'Fronteira Eficiente',
                        data: [{x: 5, y: 10}, {x: 6, y: 14}, {x: 8, y: 18}, {x: 12, y: 22}],
                        showLine: true,
                        borderColor: '#00C853',
                        backgroundColor: '#00C853',
                        pointRadius: 5
                    }]
                },
                options: {
                    responsive: true,
                    plugins: { title: { display: true, text: 'Risco vs Retorno (B3)', color: '#fff' } },
                    scales: {
                        x: { title: { display: true, text: 'Risco (Volatilidade %)', color: '#ccc' }, grid: { color: '#333' } },
                        y: { title: { display: true, text: 'Retorno Esperado (%)', color: '#ccc' }, grid: { color: '#333' } }
                    }
                }
            });
        </script>
        

            <h2>Comece a Otimizar Seu Portfólio Hoje!</h2>
            <p>Não deixe seu dinheiro parado ou exposto a riscos desnecessários. A Teoria de Markowitz, aliada à tecnologia da Minerativos, oferece o poder de construir um portfólio mais robusto e alinhado aos seus objetivos financeiros.</p>

            <div class="disclaimer">
                <strong>⚠️ Aviso Legal:</strong> Este conteúdo é fornecido apenas para fins educacionais e informativos. Não constitui recomendação de investimento. Consulte um profissional qualificado antes de tomar qualquer decisão financeira.
            </div>
        </div>

        <div class="call-to-action">
            <h2>Leve sua Análise de Investimentos para o Próximo Nível!</h2>
            <p>Descubra como a Minerativos pode otimizar seu portfólio com inteligência artificial e estratégias comprovadas.</p>
            <a href="https://minerativos.com.br/assinatura" target="_blank">Conheça a Minerativos Premium</a>
        </div>

        <footer>
            &copy; 2026 Minerativos. Todos os direitos reservados.
        </footer>
    </div>
</body>",
    author: "Jules, o Assistente de Código",
    date: "2024-07-29",
    tags: ["Tutorial", "Exemplo", "HTML"],
    readTime: "2 min",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop"
  },
  {
    id: "5",
    title: "Post de Exemplo: chamando outra página",
    excerpt: "Este é um exemplo de como adicionar um post usando HTML diretamente no código, conforme descrito no TUTORIAL.md.",
    content: '<iframe src="/posts/mercado_260313.html" width="100%" height="800px" style="border:none;"></iframe>',
    author: "Lucas",
    date: "2026-03-13",
    tags: ["Tutorial", "Exemplo", "HTML"],
    readTime: "2 min",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop"
  }
];
