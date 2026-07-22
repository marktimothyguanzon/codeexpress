import Container from "../common/Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-8 text-center">
        <p className="text-sm text-slate-500">
          © 2026 CodeExpress Software Solutions. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}