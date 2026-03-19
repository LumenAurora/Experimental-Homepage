import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './custom.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '个人学术主页 | 北京大学元培学院',
  description: '北京大学元培学院人工智能专业大一学生，研究方向为多模态大语言模型（MLLM）、智能体（Agent）和人工智能安全（Safety）',
  keywords: ['人工智能', 'MLLM', 'Agent', 'AI Safety', '北京大学', '元培学院', '学术研究'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: '个人学术主页 | 北京大学元培学院',
    description: '北京大学元培学院人工智能专业大一学生，研究方向为多模态大语言模型（MLLM）、智能体（Agent）和人工智能安全（Safety）',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
