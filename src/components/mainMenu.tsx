import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Link } from "@tanstack/react-router"

export default function MainMenu() {
    const [knowledgeOpen, setKnowledgeOpen] = useState(false)
    const { t } = useTranslation();

    return (
        <nav className="text-white uppercase mt-12 md:mt-16 flex justify-center">
            <ul className="flex flex-col md:flex-row items-center md:items-start">
                <li className="mt-0 pt-0 md:pt-5 md:mt-0 px-4">
                    <motion.div initial="initial" whileHover="hover">
                        <Link to="/projects" className="relative min-w-62.5 md:min-w-fit max-w-62.5 text-2xl p-1 font-semibold bg-menubgcolor md:bg-transparent rounded-3xl flex justify-center">
                            {t('projects')}
                            <motion.span className="absolute left-0 bottom-0 h-0.5 w-full md:bg-white origin-center" variants={{ initial: { scaleX: 0 }, hover: { scaleX: 0.8 } }} transition={{ duration: 0.25, ease: "easeOut" }} />
                        </Link>
                    </motion.div>
                </li>

                <li className="pt-6 text-2xl p-1 font-semibold hidden md:block cursor-default">|</li>

                <li className="pt-5 px-4 flex flex-col items-center relative">
                    <motion.div initial="initial" whileHover="hover">
                        <button onClick={() => setKnowledgeOpen(!knowledgeOpen)} className="relative min-w-62.5 md:min-w-fit uppercase max-w-62.5 text-2xl p-1 font-semibold bg-menubgcolor md:bg-transparent rounded-3xl">{t('knowledge')}</button>
                        {!knowledgeOpen && (
                            <motion.span className="absolute left-0 bottom-0 h-0.5 w-full md:bg-white origin-center" variants={{ initial: { scaleX: 0 }, hover: { scaleX: 0.8 } }} transition={{ duration: 0.25, ease: "easeOut" }} />
                        )}
                    </motion.div>

                    <AnimatePresence>
                        {knowledgeOpen && (
                            <motion.div initial={{ height: 0, opacity: 0, y: -10 }} animate={{ height: "auto", opacity: 1, y: 0 }} exit={{ height: 0, opacity: 0, y: -10 }} transition={{ duration: 0.4 }} className="flex flex-col w-fit mt-4 space-y-3 overflow-hidden md:absolute md:top-full md:bg-menubgcolor rounded-3xl px-0.5">
                                <Link to="/knowledge/front-end" className="min-w-62.5 md:min-w-fit text-2xl p-1 font-semibold bg-menubgcolor md:bg-transparent rounded-3xl md:hover:text-hoverpurple flex justify-center">Front-End</Link>

                                <Link to="/knowledge/back-end" className="min-w-62.5 md:min-w-fit text-2xl p-1 font-semibold bg-menubgcolor md:bg-transparent rounded-3xl md:hover:text-hoverpurple flex justify-center">Back-End</Link>

                                <Link to="/knowledge/database" className="min-w-62.5 md:min-w-fit text-2xl p-1 font-semibold bg-menubgcolor md:bg-transparent rounded-3xl md:hover:text-hoverpurple flex justify-center">Banco de dados</Link>

                                <Link to="/knowledge/mobile" className="min-w-62.5 md:min-w-fit text-2xl p-1 font-semibold bg-menubgcolor md:bg-transparent rounded-3xl md:hover:text-hoverpurple flex justify-center">Mobile</Link>

                                <Link to="/knowledge/game-dev" className="min-w-62.5 md:min-w-fit text-2xl p-1 font-semibold bg-menubgcolor md:bg-transparent rounded-3xl md:hover:text-hoverpurple flex justify-center">Game Dev</Link>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </li>

                <li className="pt-6 text-2xl p-1 font-semibold hidden md:block cursor-default">|</li>

                <li className="pt-5 px-4">
                    <motion.div initial="initial" whileHover="hover">
                        <Link to="/about" className="relative min-w-62.5 md:min-w-fit max-w-62.5 text-2xl p-1 font-semibold bg-menubgcolor md:bg-transparent rounded-3xl flex justify-center">
                            {t('about')}
                            <motion.span className="absolute left-0 bottom-0 h-0.5 w-full md:bg-white origin-center" variants={{ initial: { scaleX: 0 }, hover: { scaleX: 0.8 } }} transition={{ duration: 0.25, ease: "easeOut" }} />
                        </Link>
                    </motion.div>
                </li>

                <li className="pt-6 text-2xl p-1 font-semibold hidden md:block cursor-default">|</li>

                <li className="pt-5 px-4">
                    <motion.div initial="initial" whileHover="hover">
                        <Link to="/contact" className="relative min-w-62.5 md:min-w-fit max-w-62.5 text-2xl p-1 font-semibold bg-menubgcolor md:bg-transparent rounded-3xl flex justify-center">
                            {t('contact')}
                            <motion.span className="absolute left-0 bottom-0 h-0.5 w-full md:bg-white origin-center" variants={{ initial: { scaleX: 0 }, hover: { scaleX: 0.8 } }} transition={{ duration: 0.25, ease: "easeOut" }} />
                        </Link>
                    </motion.div>
                </li>
            </ul>
        </nav>
    )
}