'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from './Icons'

const faqs = [
  { q: 'Was ist der Unterschied zwischen Beratung und Therapie?', a: 'Coaching und Beratung arbeiten mit Menschen, die grundsätzlich psychisch gesund sind und an konkreten Situationen, Mustern oder Entscheidungen arbeiten möchten. Psychotherapie behandelt psychische Erkrankungen und setzt eine ärztliche Diagnose voraus. Mein Angebot ersetzt keine Therapie.' },
  { q: 'Wie läuft ein Erstgespräch ab?', a: 'Das Erstgespräch dauert ca. 30 Minuten und ist unverbindlich und kostenlos. Wir schauen gemeinsam, was bei dir oder euch gerade wirklich passiert – und ob und wie ich dich dabei unterstützen kann. Danach entscheidest du, ob wir weitermachen.' },
  { q: 'Muss mein Partner / meine Partnerin dabei sein?', a: 'Nein. Paarberatung ist am wirkungsvollsten, wenn beide teilnehmen – aber ich arbeite auch mit Einzelpersonen, die an ihrer Beziehungssituation arbeiten möchten. Manchmal ist der erste Schritt allein der richtige.' },
  { q: 'Wie viele Sitzungen brauche ich?', a: 'Das ist sehr individuell. Manche Menschen erleben schon nach zwei bis drei Sitzungen einen deutlichen Wendepunkt. Andere brauchen eine längere Begleitung. Wir besprechen das offen und passen den Prozess an deine Situation an.' },
  { q: 'Kann ich online beraten werden, wenn ich nicht in Garmisch-Partenkirchen wohne?', a: 'Ja. Ich berate deutschlandweit online per Video. Die meisten Klient:innen schätzen das sogar, weil es im vertrauten Umfeld stattfindet und flexibel in den Alltag passt.' },
  { q: 'Ist alles vertraulich?', a: 'Selbstverständlich. Alles, was in unseren Gesprächen besprochen wird, bleibt vertraulich. Ich unterliege der Schweigepflicht und arbeite im Rahmen professioneller ethischer Standards.' },
  { q: 'Was kostet eine Sitzung?', a: 'Aktuelle Preise teile ich gerne im Erstgespräch mit, da sie je nach Format und Setting variieren können. Grundsätzlich arbeite ich mit transparenten Honoraren und ohne versteckte Kosten.' },
  { q: 'Was, wenn ich akute psychische Probleme habe?', a: 'Dann verweise ich dich an geeignete Fachkräfte – Psychotherapeut:innen, Psychiater:innen oder Krisentelefone. Mein Angebot ist nicht für akute psychische Krisen geeignet. In solchen Situationen ist schnelle und professionelle Hilfe wichtig.' },
  { q: 'Was unterscheidet deine Arbeit von anderen Coaches?', a: 'Ich arbeite nicht mit Standard-Coaching-Methoden oder allgemeinen Kommunikationstipps. Mein Fokus liegt auf Beziehungsmustern, emotionalen Dynamiken und unbewussten Reaktionen – das, was zwischen den Zeilen passiert. Dazu bringe ich sowohl wissenschaftliches Fundament als auch eine sehr persönliche Perspektive mit.' },
]

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div>
      {faqs.map((f, i) => (
        <div key={i} className="faq-item">
          <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
            <span>{f.q}</span>
            <span style={{ color: 'var(--accent)', flexShrink: 0, marginLeft: 16 }}>
              {open === i ? <ChevronUp /> : <ChevronDown />}
            </span>
          </button>
          <div
            className="faq-answer"
            style={{ maxHeight: open === i ? 400 : 0, paddingBottom: open === i ? 24 : 0 }}
          >
            {f.a}
          </div>
        </div>
      ))}
    </div>
  )
}
