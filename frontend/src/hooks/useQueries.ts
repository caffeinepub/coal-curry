import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useGetTopReviews() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["topReviews"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getTopReviews();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetReviews() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getReviews();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitReview() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      name,
      rating,
      comment,
      dish,
    }: {
      name: string;
      rating: number;
      comment: string;
      dish?: string;
    }) => {
      if (!actor) throw new Error("Actor not initialized");
      await actor.submitReview(name, BigInt(rating), comment, dish ?? null);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
      queryClient.invalidateQueries({ queryKey: ["topReviews"] });
    },
  });
}

export function useSubmitReservation() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      name,
      phone,
      date,
      time,
      guests,
      occasion,
      seating,
      notes,
    }: {
      name: string;
      phone: string;
      date: string;
      time: string;
      guests: number;
      occasion: string;
      seating: string;
      notes: string;
    }) => {
      if (!actor) throw new Error("Actor not initialized");
      await actor.submitReservation(
        name,
        phone,
        date,
        time,
        BigInt(guests),
        occasion,
        seating,
        notes
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reservations"] });
    },
  });
}

export function useSubscribeNewsletter() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (email: string) => {
      if (!actor) throw new Error("Actor not initialized");
      const result = await actor.subscribeNewsletter(email);
      return result as "success" | "duplicate";
    },
  });
}

export function useGetAllReservations() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["reservations"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllReservations();
    },
    enabled: !!actor && !isFetching,
  });
}
