// strukturnya ikutin punya crsxx aja , yg content-layout
//ni harus dipahami karena g semua disini yg kita pake'
//jadi h se,ia errp harus diselesaikan

import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer/generated';

import { Mdx } from '@/components/mdx-components';

import '@/styles/mdx.css';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { absoluteUrl, cn, formatDate } from '@/lib/utils';
// import { env } from '@/env.ts';

interface PageProps {
  params: {
    slug: string[];
  };
}

