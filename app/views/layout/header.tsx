"use client";
import React, { useState } from "react";
import { signOut } from "next-auth/react";
import styles from "./layout.module.css"; // Import CSS module
import Image from "next/image";

export const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <div className={styles.logoContainer}>
          <Image
            src="/images/little-horse-logo.png"
            alt="Logo"
            width={32}
            height={32}
          />
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.profile} onClick={toggleDropdown}>
          <span className={styles.profileName}>John Doe</span>
          <Image
            src="/images/profile-avatar.svg"
            alt="Profile"
            className={styles.profileIcon}
            width={32}
            height={32}
          />
          {dropdownOpen && (
            <div className={styles.dropdownMenu}>
              <button
                className={styles.logoutButton}
                onClick={() => {
                  signOut();
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
