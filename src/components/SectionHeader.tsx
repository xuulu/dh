'use client'

import Link from 'next/link'

interface SectionHeaderProps {
  title: string
  link: string
}

export default function SectionHeader({ title, link }: SectionHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-4 px-4">
      <h2 className="text-xl font-bold">{title}</h2>
        <Link href={link} className="btn btn-outline btn-primary btn-sm">
            <span className="text-lg">&raquo;</span>
        </Link>
    </div>
  )
}
