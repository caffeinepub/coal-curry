import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Review {
    dish?: string;
    name: string;
    comment: string;
    rating: bigint;
}
export interface Reservation {
    id: bigint;
    seating: string;
    date: string;
    name: string;
    time: string;
    occasion: string;
    notes: string;
    phone: string;
    guests: bigint;
}
export enum Variant_duplicate_success {
    duplicate = "duplicate",
    success = "success"
}
export interface backendInterface {
    getAllReservations(): Promise<Array<Reservation>>;
    getReservationsByPhone(phone: string): Promise<Array<Reservation>>;
    getReviews(): Promise<Array<Review>>;
    getSubscribers(): Promise<Array<string>>;
    getTopReviews(): Promise<Array<Review>>;
    submitReservation(name: string, phone: string, date: string, time: string, guests: bigint, occasion: string, seating: string, notes: string): Promise<void>;
    submitReview(name: string, rating: bigint, comment: string, dish: string | null): Promise<void>;
    subscribeNewsletter(email: string): Promise<Variant_duplicate_success>;
}
