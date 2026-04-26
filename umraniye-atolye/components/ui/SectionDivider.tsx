export function SectionDivider() {
  return (
    <div className="flex items-center gap-4 max-w-5xl mx-auto px-6">
      <div className="flex-1 h-px bg-border-light" />
      <div className="w-2 h-2 rotate-45 bg-blue-500" />
      <div className="flex-1 h-px bg-border-light" />
    </div>
  );
}

export default SectionDivider;
