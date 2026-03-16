import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

function AnimatedWord({ word, active, locale }: { word: string; active: boolean; locale: string }) {
  const letters = word.split("")

  const colors =
    locale === "pt"
      ? ["rgb(0,156,59)", "rgb(255,223,0)", "rgb(0,0,255)", "rgb(0,156,59)"]
      : ["rgb(255,0,0)", "rgb(255,255,255)", "rgb(0,0,255)", "rgb(255,0,0)"]

  return (
    <span className="flex">
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          animate={
            active
              ? {
                  color: colors,
                  textShadow: [
                    "0px 0px 0px rgba(255,255,255,0)",
                    "0px 0px 8px rgba(255,255,255,0.9)",
                    "0px 0px 16px rgba(255,255,255,1)",
                    "0px 0px 8px rgba(255,255,255,0.9)",
                    "0px 0px 0px rgba(255,255,255,0)",
                  ],
                }
              : {
                  color: "#ffffff",
                  textShadow: "0px 0px 0px rgba(255,255,255,0)",
                }
          }
          transition={
            active
              ? { duration: 2.5, repeat: Infinity, delay: i * 0.12 }
              : { duration: 0 }
          }
        >
          {letter}
        </motion.span>
      ))}
    </span>
  )
}

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const locale = i18n.resolvedLanguage

  const changeLocale = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div className="flex absolute right-3 top-1 space-x-3 font-[550] text-white">
      <button onClick={() => changeLocale("pt")}>
        <AnimatedWord
          word="Português"
          active={locale === "pt"}
          locale="pt"
        />
      </button>

      <p className="text-md font-semibold cursor-default">|</p>

      <button onClick={() => changeLocale("en")}>
        <AnimatedWord
          word="English"
          active={locale === "en"}
          locale="en"
        />
      </button>
    </div>
  )
}