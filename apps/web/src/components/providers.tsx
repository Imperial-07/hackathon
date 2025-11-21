"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "@/utils/orpc";
import { ThemeProvider } from "./providers/theme-provider";
import { Toaster } from "./ui/sonner";

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider
			
		>
			<QueryClientProvider client={queryClient}>
				{children}
				<ReactQueryDevtools />
			</QueryClientProvider>
			<Toaster richColors />
		</ThemeProvider>
	);
}
