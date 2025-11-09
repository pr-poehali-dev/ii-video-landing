import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    contact: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) {
      toast({
        title: "Заполните все поля",
        description: "Пожалуйста, укажите ваше имя и контакт для связи",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время"
    });
    setFormData({ name: '', contact: '' });
  };

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/10 to-secondary/10">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8 animate-fade-in">
              <h1 className="text-7xl md:text-8xl font-heading font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                ИИгра
              </h1>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                Ваши фото становятся смешными историями
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Интерактивные видео с ИИ для свадеб, юбилеев и корпоративов, которые удивят и рассмешат всех гостей
              </p>
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 hover-scale bg-accent hover:bg-accent/90"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="Sparkles" className="mr-2" size={24} />
                Создать свое видео
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
        </div>
      </section>

      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              «Что было дальше?» — главный хит вашего праздника
            </h2>
            <div className="bg-muted/30 rounded-2xl p-8 mb-6 border border-border">
              <div className="aspect-video flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <Icon name="Play" size={64} className="mx-auto mb-4" />
                  <p className="text-lg">Здесь будет демо-видео</p>
                </div>
              </div>
            </div>
            <p className="text-xl text-foreground/90 leading-relaxed max-w-4xl mx-auto">
              Мы берем ваши старые фотографии и с помощью искусственного интеллекта создаем короткие видео с неожиданным и уморительным продолжением. Гости угадывают, «что было дальше», а вы показываете правду — такую, какой ее видит ИИ!
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16">
            Как это работает?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Upload',
                step: '1',
                title: 'Присылаете фото',
                description: 'Выбираете 3-5 самых забавных или ностальгических фотографий'
              },
              {
                icon: 'Wand2',
                step: '2',
                title: 'Мы создаем сценарий',
                description: 'Выбираем формат («Что было дальше?», «Правда или ложь?») и придумываем юмористические варианты'
              },
              {
                icon: 'Video',
                step: '3',
                title: 'Получаете готовое видео',
                description: 'Мы оживляем фото, генерируем смешные сцены и отдаем вам готовый ролик'
              }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="relative overflow-hidden hover-scale border-2 border-border/50 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 right-0 text-9xl font-heading font-bold text-primary/5 -mr-4 -mt-4">
                  {item.step}
                </div>
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-heading">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-foreground/80">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6">
            Посмотрите, как это работает
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-12">
            Здесь будет ваше демо-видео с YouTube/Vimeo
          </p>
          
          <div className="bg-muted/30 rounded-2xl p-12 mb-8 border border-border">
            <div className="aspect-video flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <Icon name="Youtube" size={80} className="mx-auto mb-4 text-accent" />
                <p className="text-lg">Встраивание видео будет здесь</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-2xl font-heading mb-6">Хотите так же?</p>
            <Button 
              size="lg" 
              className="hover-scale bg-accent hover:bg-accent/90"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Оставьте заявку!
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16">
            Наши форматы
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'ИИгра Начальная',
                price: '2 500 ₽',
                popular: false,
                features: [
                  '1 ролик',
                  'Формат «Что было дальше?»',
                  'До 5 фото',
                  'Срок: 3 дня'
                ]
              },
              {
                name: 'ИИгра Продвинутая',
                price: '5 900 ₽',
                popular: true,
                features: [
                  '2 ролика',
                  'Любой формат',
                  'До 10 фото',
                  'Помощь в сценарии',
                  'Приоритетный срок: 1 день'
                ]
              },
              {
                name: 'ИИгра Безлимитная',
                price: 'по запросу',
                popular: false,
                features: [
                  'Индивидуальный пакет',
                  'Для агентств',
                  'Неограниченные правки',
                  'Выделенный менеджер'
                ]
              }
            ].map((plan, index) => (
              <Card 
                key={index}
                className={`relative hover-scale transition-all duration-300 animate-fade-in ${
                  plan.popular 
                    ? 'border-accent border-4 shadow-2xl shadow-accent/20 scale-105' 
                    : 'border-2 border-border/50'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-accent text-accent-foreground px-4 py-1 text-sm font-bold">
                      Популярный
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-heading mb-2">{plan.name}</CardTitle>
                  <div className="text-4xl font-heading font-bold text-primary mb-4">
                    {plan.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Icon name="Check" size={20} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full hover-scale ${
                      plan.popular 
                        ? 'bg-accent hover:bg-accent/90' 
                        : 'bg-primary hover:bg-primary/90'
                    }`}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {plan.name === 'ИИгра Безлимитная' ? 'Обсудить' : 'Заказать'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16">
            Частые вопросы
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: 'Это действительно смешно?',
                answer: 'Да! Мы создаем добрый и уместный юмор. Сценарий согласуем с вами, чтобы все было идеально для вашего мероприятия.'
              },
              {
                question: 'Сколько времени занимает создание?',
                answer: 'От 1 до 3 дней в зависимости от выбранного пакета. Для пакета «Продвинутая» — всего 1 день!'
              },
              {
                question: 'Какие фото нужны?',
                answer: 'Чем лучше качество и четче лица на фотографиях, тем качественнее получится результат. Подойдут любые старые семейные или корпоративные фото.'
              },
              {
                question: 'Можно ли вносить правки?',
                answer: 'Конечно! В каждом пакете предусмотрена возможность правок. Для пакета «Безлимитная» правки неограниченны.'
              },
              {
                question: 'Подойдет ли это для корпоратива?',
                answer: 'Абсолютно! Мы работаем с корпоративными клиентами и знаем, как создать контент, который объединит всю команду.'
              }
            ].map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-lg font-heading hover:text-primary hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80 pt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Готовы удивить своих гостей?
            </h2>
            <p className="text-xl text-foreground/80">
              Оставьте заявку прямо сейчас и получите консультацию
            </p>
          </div>
          
          <Card className="border-2 border-border/50 shadow-2xl animate-slide-up">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Имя
                  </label>
                  <Input
                    id="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="text-base"
                  />
                </div>
                
                <div>
                  <label htmlFor="contact" className="block text-sm font-medium mb-2">
                    Telegram или телефон
                  </label>
                  <Input
                    id="contact"
                    placeholder="@username или +7 (999) 123-45-67"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="text-base"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-lg hover-scale bg-accent hover:bg-accent/90"
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Обсудить мое видео
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="text-lg font-heading">
            <span className="text-primary font-bold">ИИгра</span> — превращаем воспоминания в смех
          </p>
          <p className="mt-2">© 2025 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
}
