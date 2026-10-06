import { ArrowUp } from 'lucide-react'
import { profile } from '../../data/profile'
import Button from '../ui/Button'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container d-flex align-items-center justify-content-between gap-3">
        <p className="footer-note mb-0">
          <span className="brand-mark me-2" aria-hidden="true">
            SV<span className="brand-dot">.</span>
          </span>
          © {year} {profile.name}
        </p>
        <Button
          variant="icon"
          href="#inicio"
          aria-label="Volver arriba"
          title="Volver arriba"
        >
          <ArrowUp size={18} aria-hidden="true" />
        </Button>
      </div>
    </footer>
  )
}
