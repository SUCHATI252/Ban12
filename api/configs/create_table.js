export default {
  // USERS
  users: `
    CREATE TABLE IF NOT EXISTS users (
      u_id INTEGER,
      u_name VARCHAR(50),
      email VARCHAR(100) UNIQUE,
      password VARCHAR(255),
      salt VARCHAR(255),
      address TEXT,
      phone VARCHAR(20),
      type INTEGER DEFAULT 0,
      codereset VARCHAR(255),
      idreset VARCHAR(255),
      activate INTEGER DEFAULT 0,
      idactivate VARCHAR(255),
      token VARCHAR(255),
      login_at DATETIME,
      u_created_at DATETIME,
      u_updated_at DATETIME, 
      PRIMARY KEY(u_id AUTOINCREMENT)
    )
  `,

  // PERSON
  person: `
    CREATE TABLE IF NOT EXISTS persons (
      id INTEGER,
      name VARCHAR(50),
      age INTEGER,
      gender  VARCHAR(50),
      number INTEGER,
      date_infection DATE,
      checked_by VARCHAR(50),
      status INTEGER DEFAULT 0,
      created_at DATETIME,
      updated_at DATETIME,
      deleted_at DATETIME DEFAULT NULL,
      PRIMARY KEY(id AUTOINCREMENT)
    )
  `,

  // SALES
  sales: `
    CREATE TABLE IF NOT EXISTS sales (
      s_id INTEGER,
      s_order VARCHAR(50) UNIQUE,
      s_total DECIMAL(6,2),
      s_get DECIMAL(6,2),
      s_change DECIMAL(6,2),
      payment INTEGER,
      s_user INTEGER,
      customer INTEGER,
      s_date DATETIME,
      s_d VARCHAR(2),
      s_m VARCHAR(2),
      s_y VARCHAR(4),
      PRIMARY KEY(s_id AUTOINCREMENT)
    )
  `,

  // SALESDETAILS
  saledetails: `
    CREATE TABLE IF NOT EXISTS saledetails (
      sd_id INTEGER,
      sd_order VARCHAR(50),
      sd_product INTEGER,
      sd_price DECIMAL(6,2),
      qty INTEGER,
      sd_date DATE,
      PRIMARY KEY(sd_id AUTOINCREMENT)
    )
  `,

  // CATEGORYS
  categorys: `
    CREATE TABLE IF NOT EXISTS categorys (
      cat_id INTEGER,
      cat_name VARCHAR(50),
      cat_details VARCHAR(100),
      cat_created_at DATETIME,
      cat_updated_at DATETIME,
      PRIMARY KEY(cat_id AUTOINCREMENT)
    )
  `,

  // CUSTOMERS
  customers: `
    CREATE TABLE IF NOT EXISTS customers (
      cus_id INTEGER,
      cus_code VARCHAR(20) UNIQUE,
      cus_name VARCHAR(50),
      cus_email VARCHAR(100),
      cus_phone VARCHAR(20),
      cus_cash DECIMAL(6,2),
      cus_address VARCHAR(255),
      activate INTEGER DEFAULT 0,
      cus_created_at DATETIME,
      cus_updated_at DATETIME,
      PRIMARY KEY(cus_id AUTOINCREMENT)
    )
  `,

  // PAYMENT
  payment: `
    CREATE TABLE IF NOT EXISTS payment (
      pay_id INTEGER,
      pay_type VARCHAR(20),
      pay_details VARCHAR(100),
      PRIMARY KEY(pay_id AUTOINCREMENT)
    )
  `,

  // SUPPLIERS
  suppliers: `
    CREATE TABLE IF NOT EXISTS suppliers (
      sup_id INTEGER,
      sup_company VARCHAR(50),
      sup_contac VARCHAR(100),
      sup_address TEXT,
      sup_phone VARCHAR(20),
      sup_email VARCHAR(100),
      sup_website VARCHAR(50),
      sup_created_at DATETIME,
      sup_updated_at DATETIME,
      PRIMARY KEY(sup_id AUTOINCREMENT)
    )
  `
}
