import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


function Sidebar() {
  return (
    <>
      <div class="flex-shrink-0 p-3">
        <Link to="/" class="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
         <span class="fs-5 fw-semibold">Collapsible</span>
        </Link>
        <ul class="list-unstyled ps-0">
          <li class="mb-1">
            <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
              Home
            </button>
            <div class="collapse show" id="home-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><Link to="mobile" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Mobile</Link></li>
                <li><Link to="tv" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Tv</Link></li>
                <li><Link to="laptop" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Laptop</Link></li>
              </ul>
            </div>
          </li>
          <li class="mb-1">
            <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
              Dashboard
            </button>
            <div class="collapse" id="dashboard-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><Link to="axios" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Axios</Link></li>
                <li><Link to="fetch" class="link-body-emphasis d-inline-flex text-decoration-none rounded">fatchapi</Link></li>
                <li><Link to="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Monthly</Link></li>
                <li><Link to="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Annually</Link></li>
              </ul>
            </div>
          </li>
          <li class="mb-1">
            <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
              Orders
            </button>
            <div class="collapse" id="orders-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><Link to="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">New</Link></li>
                <li><Link to="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Processed</Link></li>
                <li><Link to="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Shipped</Link></li>
                <li><Link to="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Returned</Link></li>
              </ul>
            </div>
          </li>
          <li class="border-top my-3"></li>
          <li class="mb-1">
            <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
              Account
            </button>
            <div class="collapse" id="account-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><Link to="#" class="link-dark d-inline-flex text-decoration-none rounded">New...</Link></li>
                <li><Link to="#" class="link-dark d-inline-flex text-decoration-none rounded">Profile</Link></li>
                <li><Link to="#" class="link-dark d-inline-flex text-decoration-none rounded">Settings</Link></li>
                <li><Link to="#" class="link-dark d-inline-flex text-decoration-none rounded">Sign out</Link></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

    </>
  );
}
export default Sidebar;