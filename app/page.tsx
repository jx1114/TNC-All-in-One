"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ExternalLink, Home, User, Mail, Settings, Ruler, ChevronDown, Globe } from "lucide-react"

export default function LinkPlatform() {
  const [showDomainDropdown, setShowDomainDropdown] = useState(false)
  const [showDimensionDropdown, setShowDimensionDropdown] = useState(false)
  const domainTimeout = useRef<NodeJS.Timeout | null>(null)
  const dimensionTimeout = useRef<NodeJS.Timeout | null>(null)

  const domainCountries = [
    { name: "Malaysia", url: "https://tnctech.com.my" },
    { name: "Thailand", url: "https://th.tnctech.com.my" },
    { name: "Indonesia", url: "https://id.tnctech.com.my" },
    { name: "German", url: "https://de.tnctech.com.my" },
  ]

  const dimensionVersions = [
    { name: "Public Version", url: "https://tnc-public.vercel.app/" },
    { name: "Company Version", url: "https://tnc-parts-feeder.vercel.app/" },
  ]

  const links = [
    {
      title: "Domain",
      description: "View domain of all countries",
      icon: <Globe className="w-5 h-5" />,
      dropdown: "domain",
    },
    {
      title: "Dimension App",
      description: "Choose version of dimension app",
      icon: <Ruler className="w-5 h-5" />,
      dropdown: "dimension",
    },
    {
      title: "Data Analytics",
      description: "View data of website visitors",
      url: "https://clarity.microsoft.com/projects",
      icon: <User className="w-5 h-5" />,
    },
  ]

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground text-balance">TNC All in One</h1>
          <p className="text-muted-foreground text-pretty">Quick access to all TNC Tools</p>
        </div>

        {/* Link Buttons */}
        <Card className="p-6 space-y-4">
          {links.map((link, index) =>
            link.dropdown === "domain" ? (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => {
                  if (domainTimeout.current) clearTimeout(domainTimeout.current)
                  setShowDomainDropdown(true)
                }}
                onMouseLeave={() => {
                  domainTimeout.current = setTimeout(() => setShowDomainDropdown(false), 100)
                }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full h-auto p-4 justify-start gap-4 hover:bg-accent hover:text-accent-foreground transition-colors group bg-transparent flex items-center"
                  tabIndex={-1}
                >
                  <div className="text-accent group-hover:text-accent-foreground">{link.icon}</div>
                  <div className="flex-1 text-left">
                    <div className="font-semibold text-foreground group-hover:text-accent-foreground">{link.title}</div>
                    <div className="text-sm text-muted-foreground group-hover:text-accent-foreground/80">
                      {link.description}
                    </div>
                  </div>
                  <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-accent-foreground/80" />
                </Button>
                {showDomainDropdown && (
                  <div className="absolute left-0 right-0 mt-2 bg-background border rounded shadow-lg z-10">
                    {domainCountries.map((country) => (
                      <a
                        key={country.name}
                        href={country.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 hover:bg-accent hover:text-accent-foreground flex items-center gap-2"
                        onClick={() => setShowDomainDropdown(false)}
                      >
                        <span>{country.name}</span>
                        <ExternalLink className="w-4 h-4 ml-auto" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : link.dropdown === "dimension" ? (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => {
                  if (dimensionTimeout.current) clearTimeout(dimensionTimeout.current)
                  setShowDimensionDropdown(true)
                }}
                onMouseLeave={() => {
                  dimensionTimeout.current = setTimeout(() => setShowDimensionDropdown(false), 100)
                }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full h-auto p-4 justify-start gap-4 hover:bg-accent hover:text-accent-foreground transition-colors group bg-transparent flex items-center"
                  tabIndex={-1}
                >
                  <div className="text-accent group-hover:text-accent-foreground">{link.icon}</div>
                  <div className="flex-1 text-left">
                    <div className="font-semibold text-foreground group-hover:text-accent-foreground">{link.title}</div>
                    <div className="text-sm text-muted-foreground group-hover:text-accent-foreground/80">
                      {link.description}
                    </div>
                  </div>
                  <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-accent-foreground/80" />
                </Button>
                {showDimensionDropdown && (
                  <div className="absolute left-0 right-0 mt-2 bg-background border rounded shadow-lg z-10">
                    {dimensionVersions.map((version) => (
                      <a
                        key={version.name}
                        href={version.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 hover:bg-accent hover:text-accent-foreground flex items-center gap-2"
                      >
                        <span>{version.name}</span>
                        <ExternalLink className="w-4 h-4 ml-auto" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Button
                key={index}
                asChild
                variant="outline"
                size="lg"
                className="w-full h-auto p-4 justify-start gap-4 hover:bg-accent hover:text-accent-foreground transition-colors group bg-transparent"
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                  <div className="text-accent group-hover:text-accent-foreground">{link.icon}</div>
                  <div className="flex-1 text-left">
                    <div className="font-semibold text-foreground group-hover:text-accent-foreground">{link.title}</div>
                    <div className="text-sm text-muted-foreground group-hover:text-accent-foreground/80">
                      {link.description}
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent-foreground/80" />
                </a>
              </Button>
            )
          )}
        </Card>

        {/* Footer */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">Copyright © 2025 TNC Technology</p>
        </div>
      </div>
    </div>
  )
}
