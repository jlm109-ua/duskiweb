import { useTranslations } from "next-intl"

export default function LanguageSwitcher(props: {params: {locale: string}}) {
    const t = useTranslations();

    return (
        <div>
            <select>
                <option value={"en"}>{t('en')}</option>
                <option value={"es"}>{t('es')}</option>
            </select>
        </div>
    )
}