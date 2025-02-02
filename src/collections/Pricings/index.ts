import { authenticated } from '@/access/authenticated';
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished';
import type { CollectionConfig } from 'payload';

export const Pricings: CollectionConfig = {
  slug: 'pricings',
  access: {
    create: authenticated, // Only authenticated users can create documents
    delete: authenticated, // Only authenticated users can delete documents
    read: authenticatedOrPublished, // Authenticated users can read all, others can only read published
    update: authenticated, // Only authenticated users can update documents
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      label: 'Price',
    },
    {
      name: 'currency',
      type: 'select',
      options: [
        { label: 'USD', value: 'usd' },
        { label: 'EUR', value: 'eur' },
        { label: 'GBP', value: 'gbp' },
        { label: 'VND', value: 'vnd'}
        // Add more currencies as needed
      ],
      defaultValue: 'usd',
      label: 'Currency',
    },
    {
      name: 'billingPeriod',
      type: 'select',
      options: [
        { label: 'Monthly', value: 'monthly' },
        { label: 'Yearly', value: 'yearly' },
        { label: 'One-Time', value: 'one-time' },
      ],
      defaultValue: 'monthly',
      label: 'Billing Period',
    },
    {
      name: 'features',
      type: 'array',
      label: 'Features',
      fields: [
        {
          name: 'feature',
          type: 'text',
          label: 'Feature',
        },
      ],
    },
    {
      name: 'isPublished',
      type: 'checkbox',
      label: 'Published',
      defaultValue: false,
    },
  ],
  admin: {
    useAsTitle: 'title', // Use the 'title' field as the title in the admin UI
    defaultColumns: ['title', 'price', 'currency', 'billingPeriod', 'isPublished'], // Default columns in the admin UI
  },
};
