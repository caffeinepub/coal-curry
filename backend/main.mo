import Set "mo:core/Set";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import MixinStorage "blob-storage/Mixin";

actor {
  include MixinStorage();

  // Type definitions
  type Reservation = {
    id : Nat;
    name : Text;
    phone : Text;
    date : Text;
    time : Text;
    guests : Nat;
    occasion : Text;
    seating : Text;
    notes : Text;
  };

  module Reservation {
    public func compare(res1 : Reservation, res2 : Reservation) : Order.Order {
      switch (Text.compare(res1.date, res2.date)) {
        case (#equal) {
          switch (Text.compare(res1.time, res2.time)) {
            case (#equal) { Nat.compare(res1.id, res2.id) };
            case (order) { order };
          };
        };
        case (order) { order };
      };
    };
  };

  type Review = {
    name : Text;
    rating : Nat;
    comment : Text;
    dish : ?Text;
  };

  module Review {
    public func compareByRating(r1 : Review, r2 : Review) : Order.Order {
      Nat.compare(r2.rating, r1.rating);
    };
  };

  // Reservation storage
  let reservations = Map.empty<Nat, Reservation>();

  // Review storage
  var reviews : [Review] = [];

  // Newsletter subscribers storage
  let subscribers = Set.empty<Text>();

  // Unique ID generators
  var nextReservationId = 0;

  // Reservations
  public shared ({ caller }) func submitReservation(name : Text, phone : Text, date : Text, time : Text, guests : Nat, occasion : Text, seating : Text, notes : Text) : async () {
    let reservation : Reservation = {
      id = nextReservationId;
      name;
      phone;
      date;
      time;
      guests;
      occasion;
      seating;
      notes;
    };

    reservations.add(nextReservationId, reservation);
    nextReservationId += 1;
  };

  public query ({ caller }) func getAllReservations() : async [Reservation] {
    reservations.values().toArray().sort();
  };

  public query ({ caller }) func getReservationsByPhone(phone : Text) : async [Reservation] {
    let matches = reservations.values().toArray().filter(func(r) { r.phone == phone });
    matches.sort();
  };

  // Newsletter Functions
  public shared ({ caller }) func subscribeNewsletter(email : Text) : async {
    #success;
    #duplicate;
  } {
    if (subscribers.contains(email)) { return #duplicate };
    subscribers.add(email);
    #success;
  };

  public query ({ caller }) func getSubscribers() : async [Text] {
    subscribers.toArray();
  };

  // Reviews
  public shared ({ caller }) func submitReview(name : Text, rating : Nat, comment : Text, dish : ?Text) : async () {
    if (rating < 1 or rating > 5) {
      Runtime.trap("Rating must be between 1 and 5");
    };
    let review : Review = {
      name;
      rating;
      comment;
      dish;
    };
    reviews := reviews.concat([review]);
  };

  public query ({ caller }) func getReviews() : async [Review] {
    reviews.sort(Review.compareByRating);
  };

  public query ({ caller }) func getTopReviews() : async [Review] {
    let top = reviews.filter(func(r) { r.rating >= 4 });
    top.sort(Review.compareByRating);
  };
};
