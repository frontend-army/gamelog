'use client'
import React, { useState } from 'react';
import lensIcon from '../../../../public/ic_lens.svg';
import Image from "next/image";
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import styles from './styles.module.css'

export default function SearchBar() {
  const params = useSearchParams();
  const [query, setQuery] = useState(params.get('q') ?? '');
  const router = useRouter();
  const queryParams = new URLSearchParams(params);

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    queryParams.set('q', event.target.value);
    router.push(`?${queryParams.toString()}`);
    setQuery(event.target.value);
  }
  
  return (
    <div className={styles.searchBarContainer}>
      <Image
        src={lensIcon}
        alt="Search"
        width={20}
        height={20}
      />
      <input className={styles.input} onChange={handleQueryChange} value={query} placeholder="Search a game..."/>
    </div>
  )
}