import Image from "next/image";
import airKryptoLogo from "../public/assets/airKryptoLogo.png";
import { SearchIcon, UserCircleIcon, UsersIcon } from "@heroicons/react/solid";
import React from "react";

import {
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import { DateRangePicker } from "react-date-range";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  function onSearchInputChange(e) {
    setSearchInput(e.target.value);
  }

  function handleRangeSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
    console.log(ranges);
  }
  function search() {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  }
  const InitSelectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      {/* left */}
      <div className=' space-x-16 relative flex items-center h-10 cursor-pointer my-auto'>
        <Image
          src={airKryptoLogo}
          alt='/ '
          layout='fill'
          objectFit='contain'
          objectPosition='left'
          onClick={() => router.push("/")}
        />
        <p className='font-mono text-black text-md'>airKrypto</p>
      </div>

      {/* Search Bar */}
      <div className='flex items-center justify-between md:border-2 md:shadow-sm rounded-full py-2'>
        <input
          value={searchInput}
          onChange={onSearchInputChange}
          className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400'
          type='text'
          placeholder={placeholder || "Start your search"}
        />
        <SearchIcon className='hidden md:inline-flex h-8 bg-black text-white rounded-full p-2 cursor-pointer md:mx-2' />
      </div>

      {/* Right */}
      <div className='flex items-center justify-end '>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              <Avatar size={"sm"} src={UserCircleIcon} />
            </MenuButton>
            <MenuList>
              <MenuItem>Connect Wallet</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </div>
      {searchInput && (
        <div className='col-span-3 flex flex-col mx-auto'>
          <DateRangePicker
            wrapperClassName='w-full'
            ranges={[InitSelectionRange]}
            onChange={handleRangeSelect}
            minDate={new Date()}
            rangeColors={["#000000"]}
          />
          <div className='flex items-center border-b mb-4'>
            <h2 className='text-2xl flex-grow font-semibold'>
              Number of Guests
            </h2>
            <p className="pr-2">Max:3</p>
            <UsersIcon className='h-5' />
            <input
              type='number'
              value={noOfGuests}
              min={1}
              max={3}
              onChange={(e) => setNoOfGuests(e.target.value)}
              className='w-12 pl-2 outline-none text-black'
            />
          </div>
          <div className='flex'>
            <button
              className='flex-1 text-gray-500'
              onClick={(e) => setSearchInput("")}
            >
              Cancel
            </button>
            <button className='flex-1 text-black' onClick={search}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
