import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Review, Reservation } from '../backend';

export function useGetTopReviews() {
  const { actor, isFetching } = useActor();
  return useQuery<Review[]>({
    queryKey: ['topReviews'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getTopReviews();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetReviews() {
  const { actor, isFetching } = useActor();
  return useQuery<Review[]>({
    queryKey: ['reviews'],
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
    mutationFn: async ({ name, rating, comment, dish }: { name: string; rating: bigint; comment: string; dish: string | null }) => {
      if (!actor) throw new Error('Actor not ready');
      return actor.submitReview(name, rating, comment, dish);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviews'] });
      queryClient.invalidateQueries({ queryKey: ['topReviews'] });
    },
  });
}

export function useSubmitReservation() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      name: string; phone: string; date: string; time: string;
      guests: bigint; occasion: string; seating: string; notes: string;
    }) => {
      if (!actor) throw new Error('Actor not ready');
      return actor.submitReservation(data.name, data.phone, data.date, data.time, data.guests, data.occasion, data.seating, data.notes);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reservations'] });
    },
  });
}

export function useGetReservationsByPhone(phone: string) {
  const { actor, isFetching } = useActor();
  return useQuery<Reservation[]>({
    queryKey: ['reservations', phone],
    queryFn: async () => {
      if (!actor || !phone) return [];
      return actor.getReservationsByPhone(phone);
    },
    enabled: !!actor && !isFetching && phone.length > 0,
  });
}

export function useSubscribeNewsletter() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (email: string) => {
      if (!actor) throw new Error('Actor not ready');
      return actor.subscribeNewsletter(email);
    },
  });
}
