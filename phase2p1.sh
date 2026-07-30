# 1. Create the components directory inside your React project
mkdir -p portfolio-page/src/components

# 2. Create Header.jsx shell
cat << 'EOF' > portfolio-page/src/components/Header.jsx
import React from 'react';

export default function Header() {
  return (
    <header style={{ padding: '20px', borderBottom: '1px solid var(--border)' }}>
      <nav>
        <span>&gt; bruno</span> | Navigation Placeholder
      </nav>
    </header>
  );
}
EOF

# 3. Create Hero.jsx shell
cat << 'EOF' > portfolio-page/src/components/Hero.jsx
import React from 'react';

export default function Hero() {
  return (
    <section id="hero" style={{ padding: '40px 20px', borderBottom: '1px solid var(--border)' }}>
      <div>A1 · Início</div>
      <h1>Hero Section Placeholder</h1>
    </section>
  );
}
EOF

# 4. Create About.jsx shell
cat << 'EOF' > portfolio-page/src/components/About.jsx
import React from 'react';

export default function About() {
  return (
    <section id="about" style={{ padding: '40px 20px', borderBottom: '1px solid var(--border)' }}>
      <div>B1 · Sobre</div>
      <h1>About Section Placeholder</h1>
    </section>
  );
}
EOF

# 5. Create Projects.jsx shell
cat << 'EOF' > portfolio-page/src/components/Projects.jsx
import React from 'react';

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '40px 20px', borderBottom: '1px solid var(--border)' }}>
      <div>C1 · Projetos</div>
      <h1>Projects Section Placeholder</h1>
    </section>
  );
}
EOF

# 6. Create Certifications.jsx shell
cat << 'EOF' > portfolio-page/src/components/Certifications.jsx
import React from 'react';

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: '40px 20px', borderBottom: '1px solid var(--border)' }}>
      <div>D1 · Certificações</div>
      <h1>Certifications Section Placeholder</h1>
    </section>
  );
}
EOF

# 7. Create Contact.jsx shell
cat << 'EOF' > portfolio-page/src/components/Contact.jsx
import React from 'react';

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '40px 20px', borderBottom: '1px solid var(--border)' }}>
      <div>E1 · Contato</div>
      <h1>Contact Section Placeholder</h1>
    </section>
  );
}
EOF

# 8. Create Footer.jsx shell
cat << 'EOF' > portfolio-page/src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer style={{ padding: '20px', textAlign: 'center' }}>
      <p>Footer Placeholder</p>
    </footer>
  );
}
EOF

echo "All component shells have been successfully created inside portfolio-page/src/components!"