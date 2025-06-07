import React, { useEffect } from "react";
import PetAdoptionCard from "./PetAdoptionCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPosts,
  getStatus,
  selectAllPosts,
} from "@/Store/AdoptionPostSlice";
import { useSearchParams } from "react-router-dom";
import handleFilterChange from "./utils/handleFilterChange";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

const PetList = () => {
  const dispatch = useDispatch();
  const allPets = useSelector(selectAllPosts);
  const status = useSelector(getStatus);
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedTypes = searchParams.get("animalType")?.split(",") || [];
  const selectedBreed = searchParams.get("breed")?.split(",") || [];
  const selectedRegion = searchParams.get("region")?.split(",") || [];
  const minAgeParam = searchParams.get("minAge");
  const maxAgeParam = searchParams.get("maxAge");
  const minAge = minAgeParam ? Number(minAgeParam) : null;
  const maxAge = maxAgeParam ? Number(maxAgeParam) : null;
  const hasFilterApplied =
    selectedTypes.length !== 0 ||
    Boolean(selectedBreed) ||
    Boolean(selectedRegion) ||
    Boolean(minAge) ||
    Boolean(maxAge);
  const filter = {
    selectedTypes,
    selectedBreed,
    selectedRegion,
    minAge,
    maxAge,
  };

  const filteredPets = allPets.filter((pet) => {
    const matchType =
      selectedTypes.length === 0 || selectedTypes.includes(pet.animalType);
    const matchBreed =
      selectedBreed.length === 0 || selectedBreed.includes(pet.breed);
    const matchRegion =
      selectedRegion.length === 0 || selectedRegion.includes(pet.address.city);
    const matchMinAge = minAge === null || pet.age >= minAge;
    const matchMaxAge = maxAge === null || pet.age <= maxAge;

    return matchType && matchBreed && matchRegion && matchMinAge && matchMaxAge;
  });

  const POST_PER_PAGE = 4;
  console.log(searchParams.get("page"));
  const page = parseInt(searchParams.get("page") || "1", 10);
  const totalPages = Math.ceil(filteredPets?.length / POST_PER_PAGE);

  const paginatedList = filteredPets?.slice(
    (page - 1) * POST_PER_PAGE,
    page * POST_PER_PAGE
  );
  console.log(paginatedList, "paginated");

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const goToPage = (value) => {
    if (value < 1 || value > totalPages) return;
    handleFilterChange(setSearchParams, { page: value });
  };
  return (
    <div className="px-10 pt-10 shadow-xs pb-8 mb-10">
      {filteredPets?.length ? (
        <>
          <main className="grid grid-cols-4 gap-x-4 gap-y-8">
            {paginatedList.map((pet) => (
              <PetAdoptionCard key={pet._id} {...pet} />
            ))}
          </main>
          <Pagination className={"mt-6"}>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => goToPage(page - 1)}
                  disabled={page === 1}
                  className={'hover:bg-[#e4d1cd] active:font-bold'}
                />
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => {
                const isElementActive = page === i+1
                return (
                <PaginationItem key={i}>
                  <PaginationLink
                    isActive={isElementActive}
                    onClick={() => goToPage(i + 1)}
                    className={`${isElementActive ? 'bg-[#fffae6] border-[#8C7A3F]' : null} hover:bg-[#e4d1cd] active:font-bold`}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              )})}

              <PaginationItem>
                <PaginationNext
                  onClick={() => goToPage(page + 1)}
                  disabled={page === totalPages}
                  className={'hover:bg-[#e4d1cd] active:font-bold'}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </>
      ) : hasFilterApplied ? (
        <h1 className="font-bold text-4xl">No match found</h1>
      ) : (
        <h1 className="font-bold text-4xl">Loading...</h1>
      )}
    </div>
  );
};

export default PetList;
