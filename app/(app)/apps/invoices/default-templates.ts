import { SettingsMap } from "@/models/settings"
import { User } from "@/prisma/client"
import { addDays, format } from "date-fns"
import { InvoiceFormData } from "./components/invoice-page"

export interface InvoiceTemplate {
  id?: string
  name: string
  formData: InvoiceFormData
}

export default function defaultTemplates(user: User, settings: SettingsMap): InvoiceTemplate[] {
  const defaultTemplate: InvoiceFormData = {
    title: "FATURA",
    businessLogo: user.businessLogo,
    invoiceNumber: "",
    date: format(new Date(), "yyyy-MM-dd"),
    dueDate: format(addDays(new Date(), 30), "yyyy-MM-dd"),
    currency: settings.default_currency || "EUR",
    companyDetails: `${user.businessName}\n${user.businessAddress || ""}`,
    companyDetailsLabel: "Emitente",
    billTo: "",
    billToLabel: "Destinatário",
    items: [{ name: "", subtitle: "", showSubtitle: false, quantity: 1, unitPrice: 0, subtotal: 0 }],
    taxIncluded: true,
    additionalTaxes: [{ name: "IVA", rate: 0, amount: 0 }],
    additionalFees: [],
    notes: "",
    bankDetails: user.businessBankDetails || "",
    issueDateLabel: "Data de emissão",
    dueDateLabel: "Data de vencimento",
    itemLabel: "Item",
    quantityLabel: "Quantidade",
    unitPriceLabel: "Preço unitário",
    subtotalLabel: "Subtotal",
    summarySubtotalLabel: "Subtotal:",
    summaryTotalLabel: "Total:",
  }

  const germanTemplate: InvoiceFormData = {
    title: "RECHNUNG",
    businessLogo: user.businessLogo,
    invoiceNumber: "",
    date: format(new Date(), "yyyy-MM-dd"),
    dueDate: format(addDays(new Date(), 30), "yyyy-MM-dd"),
    currency: "EUR",
    companyDetails: `${user.businessName}\n${user.businessAddress || ""}`,
    companyDetailsLabel: "Rechnungssteller",
    billTo: "",
    billToLabel: "Rechnungsempfänger",
    items: [{ name: "", subtitle: "", showSubtitle: false, quantity: 1, unitPrice: 0, subtotal: 0 }],
    taxIncluded: true,
    additionalTaxes: [{ name: "MwSt", rate: 19, amount: 0 }],
    additionalFees: [],
    notes: "",
    bankDetails: user.businessBankDetails || "",
    issueDateLabel: "Rechnungsdatum",
    dueDateLabel: "Fälligkeitsdatum",
    itemLabel: "Position",
    quantityLabel: "Menge",
    unitPriceLabel: "Einzelpreis",
    subtotalLabel: "Zwischensumme",
    summarySubtotalLabel: "Zwischensumme:",
    summaryTotalLabel: "Gesamtbetrag:",
  }

  return [
    { name: "Padrão", formData: defaultTemplate },
    { name: "DE", formData: germanTemplate },
  ]
}