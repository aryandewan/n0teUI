"use client";

import * as React from "react";
import { Search, FileText, Hash } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  href: string;
  type: "page" | "component" | "section";
}

// Mock search data - in a real app, this would come from your CMS or search API
const searchData: SearchResult[] = [
  {
    id: "1",
    title: "Introduction",
    description: "Re-usable components built using Radix UI and Tailwind CSS.",
    href: "/docs",
    type: "page",
  },
  {
    id: "2",
    title: "Installation",
    description: "How to install dependencies and structure your app.",
    href: "/docs/installation",
    type: "page",
  },
  {
    id: "3",
    title: "Button Component",
    description: "Displays a button or a component that looks like a button.",
    href: "/docs/components/button",
    type: "component",
  },
  {
    id: "4",
    title: "Card Component",
    description: "Displays a card with header, content, and footer.",
    href: "/docs/components/card",
    type: "component",
  },
  {
    id: "5",
    title: "Badge Component",
    description: "Displays a badge or a component that looks like a badge.",
    href: "/docs/components/badge",
    type: "component",
  },
  {
    id: "6",
    title: "Examples",
    description: "Browse component examples and implementations.",
    href: "/examples",
    type: "page",
  },
  {
    id: "7",
    title: "Dashboard Example",
    description: "A complete dashboard layout example.",
    href: "/examples/dashboard",
    type: "page",
  },
  {
    id: "8",
    title: "Cards Example",
    description: "Various card layout examples.",
    href: "/examples/cards",
    type: "page",
  },
  {
    id: "9",
    title: "Button Variants",
    description:
      "Different button styles: default, secondary, destructive, outline, ghost, link.",
    href: "/docs/components/button#examples",
    type: "section",
  },
  {
    id: "10",
    title: "Button Sizes",
    description: "Button sizing options: small, default, large.",
    href: "/docs/components/button#examples",
    type: "section",
  },
];

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  // Filter results based on query
  React.useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const filtered = searchData.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
    setSelectedIndex(0);
  }, [query]);

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % results.length);
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex(
            (prev) => (prev - 1 + results.length) % results.length
          );
          break;
        case "Enter":
          e.preventDefault();
          if (results[selectedIndex]) {
            window.location.href = results[selectedIndex].href;
            onOpenChange(false);
          }
          break;
        case "Escape":
          onOpenChange(false);
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, results, selectedIndex, onOpenChange]);

  const getIcon = (type: SearchResult["type"]) => {
    switch (type) {
      case "component":
        return <Hash className="h-4 w-4" />;
      case "page":
        return <FileText className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 bg-white">
        <DialogHeader className="px-4 pt-4 pb-0">
          <DialogTitle>Search Documentation</DialogTitle>
        </DialogHeader>
        <div className="flex items-center border-b px-3">
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search documentation..."
            className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            autoFocus
          />
        </div>
        <div className="max-h-[300px] overflow-y-auto">
          {!query && (
            <div className="p-4 text-center text-sm text-muted-foreground">
              <div className="mb-2">Search for documentation, components, and examples</div>
              <div className="text-xs">Try searching for "button", "installation", or "examples"</div>
            </div>
          )}
          {query && results.length === 0 && (
            <div className="py-6 text-center text-sm text-muted-foreground">
              No results found for "{query}"
            </div>
          )}
          {results.length > 0 && (
            <div className="p-2">
              {results.map((result, index) => (
                <Button
                  key={result.id}
                  variant="ghost"
                  className={cn(
                    "w-full justify-start h-auto p-3 text-left",
                    index === selectedIndex && "bg-accent"
                  )}
                  onClick={() => {
                    window.location.href = result.href;
                    onOpenChange(false);
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 text-muted-foreground">
                      {getIcon(result.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm">{result.title}</div>
                      <div className="text-xs text-muted-foreground line-clamp-2">
                        {result.description}
                      </div>
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          )}
        </div>
        {results.length > 0 && (
          <div className="border-t px-3 py-2 text-xs text-muted-foreground">
            Use ↑↓ to navigate, Enter to select, Esc to close
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
