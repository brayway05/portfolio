'use client';

import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Loader2 } from 'lucide-react';

type ProjectMarkdownDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  markdownUrl: string;
};

export function ProjectMarkdownDialog({
  open,
  onOpenChange,
  title,
  markdownUrl,
}: ProjectMarkdownDialogProps) {
  const [markdown, setMarkdown] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!open) {
      return;
    }
    let cancelled = false;
    setMarkdown(null);
    setError(null);
    fetch(markdownUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Could not load document (${res.status})`);
        }
        return res.text();
      })
      .then((text) => {
        if (!cancelled) {
          setMarkdown(text);
        }
      })
      .catch((e: unknown) => {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : 'Failed to load document');
        }
      });
    return () => {
      cancelled = true;
    };
  }, [open, markdownUrl]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex max-h-[85vh] max-w-3xl flex-col gap-0 overflow-hidden p-0 sm:max-w-3xl">
        <DialogHeader className="shrink-0 border-b px-6 py-4 text-left">
          <DialogTitle className="text-xl">{title}</DialogTitle>
        </DialogHeader>
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 py-4">
          {error && (
            <p className="text-sm text-destructive" role="alert">
              {error}
            </p>
          )}
          {!error && markdown === null && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
              <span>Loading…</span>
            </div>
          )}
          {!error && markdown !== null && (
            <div className="prose prose-sm dark:prose-invert max-w-none prose-headings:scroll-mt-4 prose-a:text-primary prose-th:border prose-td:border prose-th:px-2 prose-td:px-2 prose-th:py-1 prose-td:py-1">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
