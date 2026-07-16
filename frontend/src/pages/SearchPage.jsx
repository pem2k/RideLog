import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { searchUsers } from "../api/users";
import UserCard from "../components/UserCard";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.trim().length < 2) {
      return;
    }

    searchUsers(query.trim()).then(setResults);
  }, [query]);

  return (
    <Container className="content-narrow py-4">
      <h2 className="text-center">Search Results</h2>
      {results.map((user) => (
        <UserCard key={user._id} user={user} />
      ))}
      {query.length >= 2 && results.length === 0 && (
        <p className="text-secondary">No users found</p>
      )}
      {query.length < 2 && (
        <p className="text-secondary">Enter a search term in the navbar</p>
      )}
    </Container>
  );
}
