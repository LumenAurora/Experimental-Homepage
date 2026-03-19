"use client"

import { useState } from 'react'
import { 
  Github, 
  Mail, 
  Linkedin, 
  MapPin, 
  GraduationCap, 
  Award, 
  BookOpen, 
  Code,
  FileText,
  ExternalLink,
  Moon,
  Sun,
  Menu,
  X
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  const navItems = [
    { name: '简介', href: '#about' },
    { name: '研究方向', href: '#research' },
    { name: '科研项目', href: '#projects' },
    { name: '发表成果', href: '#publications' },
    { name: '代码开源', href: '#github' },
    { name: '学术经历', href: '#experience' },
  ]

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      {/* 导航栏 */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              <span className="font-bold text-lg hidden sm:block">个人学术主页</span>
            </div>
            
            {/* 桌面端导航 */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
            </div>

            {/* 移动端菜单按钮 */}
            <div className="flex items-center gap-2 md:hidden">
              <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* 移动端导航菜单 */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border mt-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 左侧边栏 */}
          <aside className="lg:col-span-4 xl:col-span-3">
            <div className="sticky top-24 space-y-6">
              {/* 个人信息卡片 */}
              <Card className="overflow-hidden">
                <div className="bg-gradient-to-br from-primary to-primary-dark h-32"></div>
                <CardContent className="p-6 -mt-16">
                  <div className="text-center">
                    {/* 头像占位符 */}
                    <div className="w-32 h-32 mx-auto rounded-full border-4 border-background bg-gradient-to-br from-primary-light to-primary overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center bg-muted">
                        <GraduationCap className="w-16 h-16 text-muted-foreground" />
                      </div>
                    </div>
                    
                    <h1 className="text-2xl font-bold mt-4">[您的姓名]</h1>
                    <p className="text-muted-foreground text-sm mt-1">
                      北京大学元培学院<br />
                      人工智能专业 大一本科生
                    </p>

                    {/* 联系方式 */}
                    <div className="flex justify-center gap-3 mt-4">
                      <a href="mailto:your-email@pku.edu.cn" className="social-link">
                        <Mail className="w-5 h-5" />
                      </a>
                      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>

                    {/* 基本信息 */}
                    <div className="mt-6 space-y-2 text-sm">
                      <div className="flex items-center justify-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>北京市海淀区颐和园路 5 号</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-muted-foreground">
                        <GraduationCap className="w-4 h-4" />
                        <span>预计 2028 年毕业</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 快速链接 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">快速链接</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="#publications">
                      <FileText className="w-4 h-4 mr-2" />
                      发表成果
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                      <Code className="w-4 h-4 mr-2" />
                      GitHub 主页
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="mailto:your-email@pku.edu.cn">
                      <Mail className="w-4 h-4 mr-2" />
                      联系我
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </aside>

          {/* 主内容区 */}
          <main className="lg:col-span-8 xl:col-span-9 space-y-8">
            {/* 个人简介 */}
            <section id="about" className="scroll-mt-24">
              <Card>
                <CardHeader>
                  <h2 className="section-title text-2xl font-bold">个人简介</h2>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    我是北京大学元培学院人工智能专业的大一本科生，师从[导师姓名]教授。
                    目前的研究兴趣主要集中在多模态大语言模型（MLLM）、智能体（Agent）和人工智能安全（Safety）领域。
                    我热衷于探索 AI 的前沿技术，并致力于将理论研究应用于实际问题的解决。
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    在课余时间，我喜欢阅读技术文献、参与开源项目，并与志同道合的研究者交流合作。
                    期待与您在学术研究上建立联系！
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                    <div className="text-center p-4 bg-secondary rounded-lg">
                      <div className="text-2xl font-bold text-primary">[X]</div>
                      <div className="text-xs text-muted-foreground mt-1">发表论文</div>
                    </div>
                    <div className="text-center p-4 bg-secondary rounded-lg">
                      <div className="text-2xl font-bold text-primary">[X]</div>
                      <div className="text-xs text-muted-foreground mt-1">开源项目</div>
                    </div>
                    <div className="text-center p-4 bg-secondary rounded-lg">
                      <div className="text-2xl font-bold text-primary">[X]</div>
                      <div className="text-xs text-muted-foreground mt-1">学术荣誉</div>
                    </div>
                    <div className="text-center p-4 bg-secondary rounded-lg">
                      <div className="text-2xl font-bold text-primary">[X]</div>
                      <div className="text-xs text-muted-foreground mt-1">GitHub Stars</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* 研究方向 */}
            <section id="research" className="scroll-mt-24">
              <Card>
                <CardHeader>
                  <h2 className="section-title text-2xl font-bold">研究方向</h2>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-6 bg-gradient-to-br from-primary-light to-secondary rounded-xl">
                      <BookOpen className="w-10 h-10 text-primary mb-4" />
                      <h3 className="text-lg font-semibold mb-2">多模态大语言模型</h3>
                      <p className="text-sm text-muted-foreground">
                        研究视觉 - 语言模型的表示学习、跨模态对齐和推理能力
                      </p>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-primary-light to-secondary rounded-xl">
                      <Code className="w-10 h-10 text-primary mb-4" />
                      <h3 className="text-lg font-semibold mb-2">智能体（Agent）</h3>
                      <p className="text-sm text-muted-foreground">
                        探索自主智能体的规划、决策和任务执行能力
                      </p>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-primary-light to-secondary rounded-xl">
                      <Award className="w-10 h-10 text-primary mb-4" />
                      <h3 className="text-lg font-semibold mb-2">人工智能安全</h3>
                      <p className="text-sm text-muted-foreground">
                        关注大模型的鲁棒性、对齐和可解释性问题
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* 科研项目 */}
            <section id="projects" className="scroll-mt-24">
              <Card>
                <CardHeader>
                  <h2 className="section-title text-2xl font-bold">科研项目</h2>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* 项目 1 */}
                  <div className="publication-item rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">[项目名称 1]</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-medium">指导老师：</span>[导师姓名] 教授
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      项目简介：[项目描述，例如：研究基于 Transformer 的多模态融合方法，提升视觉问答任务的性能]
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="badge badge-primary">MLLM</span>
                      <span className="badge badge-primary">Vision-Language</span>
                      <span className="badge badge-muted">2024-至今</span>
                    </div>
                  </div>

                  {/* 项目 2 */}
                  <div className="publication-item rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">[项目名称 2]</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-medium">指导老师：</span>[导师姓名] 教授
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      项目简介：[项目描述，例如：开发基于大语言模型的自主任务规划系统]
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="badge badge-primary">Agent</span>
                      <span className="badge badge-primary">Planning</span>
                      <span className="badge badge-muted">2024-至今</span>
                    </div>
                  </div>

                  {/* 项目 3 */}
                  <div className="publication-item rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">[项目名称 3]</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-medium">指导老师：</span>[导师姓名] 教授
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      项目简介：[项目描述，例如：研究大语言模型的安全对齐方法，防止有害输出]
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="badge badge-primary">AI Safety</span>
                      <span className="badge badge-primary">Alignment</span>
                      <span className="badge badge-muted">2024-至今</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* 发表成果 */}
            <section id="publications" className="scroll-mt-24">
              <Card>
                <CardHeader>
                  <h2 className="section-title text-2xl font-bold">发表成果</h2>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* 论文 1 */}
                  <div className="publication-item rounded-lg">
                    <h3 className="font-semibold mb-2">
                      [论文标题 1]
                      <span className="badge badge-gold ml-2">CCF-A</span>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-medium">作者：</span>[您的姓名]，[合作者 1]，[合作者 2]
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-medium">会议/期刊：</span>[例如：NeurIPS 2024]
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Button variant="outline" size="sm" asChild>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <FileText className="w-4 h-4 mr-1" />
                          PDF
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <Code className="w-4 h-4 mr-1" />
                          Code
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          项目页面
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* 论文 2 */}
                  <div className="publication-item rounded-lg">
                    <h3 className="font-semibold mb-2">
                      [论文标题 2]
                      <span className="badge badge-gold ml-2">CCF-B</span>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-medium">作者：</span>[您的姓名]，[合作者 1]，[合作者 2]
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-medium">会议/期刊：</span>[例如：ICLR 2024]
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Button variant="outline" size="sm" asChild>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <FileText className="w-4 h-4 mr-1" />
                          PDF
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <Code className="w-4 h-4 mr-1" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* 预印本 */}
                  <div className="publication-item rounded-lg">
                    <h3 className="font-semibold mb-2">
                      [论文标题 3]
                      <span className="badge badge-muted ml-2">arXiv</span>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-medium">作者：</span>[您的姓名]，[合作者 1]，[合作者 2]
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-medium">状态：</span>arXiv 预印本 (arXiv:xxxx.xxxxx)
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://arxiv.org" target="_blank" rel="noopener noreferrer">
                          <FileText className="w-4 h-4 mr-1" />
                          arXiv
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* 代码开源 */}
            <section id="github" className="scroll-mt-24">
              <Card>
                <CardHeader>
                  <h2 className="section-title text-2xl font-bold">代码开源</h2>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* GitHub 项目 1 */}
                    <div className="p-4 border border-border rounded-lg hover:border-primary transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-primary">[项目名称 1]</h3>
                        <span className="text-xs text-muted-foreground">⭐ [X]</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        [项目简介，例如：一个用于多模态学习的 PyTorch 工具库]
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="text-xs bg-secondary px-2 py-1 rounded">Python</span>
                        <span className="text-xs bg-secondary px-2 py-1 rounded">PyTorch</span>
                        <span className="text-xs bg-secondary px-2 py-1 rounded">MLLM</span>
                      </div>
                      <Button variant="academic" size="sm" className="w-full" asChild>
                        <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          查看代码
                        </a>
                      </Button>
                    </div>

                    {/* GitHub 项目 2 */}
                    <div className="p-4 border border-border rounded-lg hover:border-primary transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-primary">[项目名称 2]</h3>
                        <span className="text-xs text-muted-foreground">⭐ [X]</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        [项目简介，例如：Agent 任务规划框架的实现]
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="text-xs bg-secondary px-2 py-1 rounded">Python</span>
                        <span className="text-xs bg-secondary px-2 py-1 rounded">LLM</span>
                        <span className="text-xs bg-secondary px-2 py-1 rounded">Agent</span>
                      </div>
                      <Button variant="academic" size="sm" className="w-full" asChild>
                        <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          查看代码
                        </a>
                      </Button>
                    </div>

                    {/* GitHub 项目 3 */}
                    <div className="p-4 border border-border rounded-lg hover:border-primary transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-primary">[项目名称 3]</h3>
                        <span className="text-xs text-muted-foreground">⭐ [X]</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        [项目简介，例如：学术主页模板]
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="text-xs bg-secondary px-2 py-1 rounded">Next.js</span>
                        <span className="text-xs bg-secondary px-2 py-1 rounded">TypeScript</span>
                        <span className="text-xs bg-secondary px-2 py-1 rounded">Tailwind</span>
                      </div>
                      <Button variant="academic" size="sm" className="w-full" asChild>
                        <a href="https://github.com/yourusername/project3" target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          查看代码
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button variant="academic" className="w-full" asChild>
                      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 mr-2" />
                        访问我的 GitHub 主页
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* 学术经历与荣誉 */}
            <section id="experience" className="scroll-mt-24">
              <Card>
                <CardHeader>
                  <h2 className="section-title text-2xl font-bold">学术经历与荣誉</h2>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* 教育经历 */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        教育经历
                      </h3>
                      <div className="timeline-item">
                        <div className="flex items-start justify-between mb-1">
                          <div>
                            <h4 className="font-semibold">北京大学 元培学院</h4>
                            <p className="text-sm text-muted-foreground">人工智能专业 本科</p>
                          </div>
                          <span className="text-sm text-muted-foreground">2023 - 2028（预计）</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          GPA: [X.X]/4.0 | 排名：[X/XX]
                        </p>
                      </div>
                    </div>

                    {/* 科研经历 */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-primary" />
                        科研经历
                      </h3>
                      <div className="timeline-item">
                        <div className="flex items-start justify-between mb-1">
                          <div>
                            <h4 className="font-semibold">[实验室/研究组名称]</h4>
                            <p className="text-sm text-muted-foreground">科研助理 / 实习生</p>
                          </div>
                          <span className="text-sm text-muted-foreground">2024 - 至今</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          [描述研究内容，例如：参与多模态大语言模型的研究，负责实验设计和论文撰写]
                        </p>
                      </div>
                      <div className="timeline-item">
                        <div className="flex items-start justify-between mb-1">
                          <div>
                            <h4 className="font-semibold">[实验室/研究组名称]</h4>
                            <p className="text-sm text-muted-foreground">访问学生</p>
                          </div>
                          <span className="text-sm text-muted-foreground">2023 - 2024</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          [描述研究内容]
                        </p>
                      </div>
                    </div>

                    {/* 荣誉奖项 */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary" />
                        荣誉奖项
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-gold mt-2"></div>
                          <div>
                            <h4 className="font-medium">[奖项名称 1]</h4>
                            <p className="text-sm text-muted-foreground">颁发机构 | 2024</p>
                            <p className="text-xs text-muted-foreground mt-1">[例如：国家奖学金，前 2%]</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-gold mt-2"></div>
                          <div>
                            <h4 className="font-medium">[奖项名称 2]</h4>
                            <p className="text-sm text-muted-foreground">颁发机构 | 2024</p>
                            <p className="text-xs text-muted-foreground mt-1">[例如：全国中学生信息学奥林匹克竞赛 金牌]</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-gold mt-2"></div>
                          <div>
                            <h4 className="font-medium">[奖项名称 3]</h4>
                            <p className="text-sm text-muted-foreground">颁发机构 | 2023</p>
                            <p className="text-xs text-muted-foreground mt-1">[例如：北京大学优秀新生奖学金]</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 学术服务 */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-primary" />
                        学术服务
                      </h3>
                      <div className="space-y-3">
                        <div className="timeline-item">
                          <h4 className="font-medium">[会议/期刊名称] 审稿人</h4>
                          <p className="text-sm text-muted-foreground">2024 - 至今</p>
                        </div>
                        <div className="timeline-item">
                          <h4 className="font-medium">[学生组织/社团] [职位]</h4>
                          <p className="text-sm text-muted-foreground">2023 - 至今</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* 页脚 */}
            <footer className="text-center py-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                © 2024 [您的姓名]. 最后更新：2024 年 12 月
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                基于 Next.js + Tailwind CSS 构建 | 
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="academic-link ml-1">
                  在 GitHub 上查看源码
                </a>
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  )
}
