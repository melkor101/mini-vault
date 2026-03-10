import { useState, useEffect } from 'react';
import type { Query, Model } from '@nozbe/watermelondb';

export const useQuery = <T extends Model>(query: Query<T>): T[] => {
  const [records, setRecords] = useState<T[]>([]);

  useEffect(() => {
    const unsubscribe = query.experimentalSubscribe(setRecords);
    return unsubscribe;
  }, []);

  return records;
};
