import React from 'react';

export interface Sponsor {
  id: number;
  name: string;
  logoUrl: string;
}

export interface Prize {
  rank: string;
  amount: string;
  description: string;
  icon: React.ReactNode;
}