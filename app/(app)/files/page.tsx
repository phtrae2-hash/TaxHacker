import { Metadata } from "next"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: "Enviando...",
}

export default function UploadStatusPage() {
  notFound()
}
