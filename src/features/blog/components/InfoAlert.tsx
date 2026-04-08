import { Alert, AlertDescription } from '@/components/ui/alert';

export function InfoAlert({ children }: { children: React.ReactNode }) {
  return (
    <Alert>
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
}
