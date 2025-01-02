"use client"
import React from 'react'
import Link from 'next/link'
import { IconArrowRight } from '@tabler/icons-react'
const AllPropertyButton = () => {
  return (
    <div className="text-center">
              <Link
                href={`/allproperties`}
                title="Click to view all properties"
                className="btn btn-lg see-all-pro"
              >
                See all properties
                <IconArrowRight className="ml-1" />
              </Link>
            </div>
  )
}

export default AllPropertyButton
