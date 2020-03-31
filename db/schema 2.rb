# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_03_30_233125) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "products", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.float "price"
    t.boolean "has_size"
    t.text "sizes"
    t.string "category"
    t.text "main_image"
    t.text "alt_image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "purchase_products", force: :cascade do |t|
    t.integer "quantity"
    t.string "size_choice"
    t.bigint "purchase_records_id", null: false
    t.bigint "product_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["product_id"], name: "index_purchase_products_on_product_id"
    t.index ["purchase_records_id"], name: "index_purchase_products_on_purchase_records_id"
  end

  create_table "purchase_records", force: :cascade do |t|
    t.float "order_total"
    t.string "email_address"
    t.string "first_name"
    t.string "last_name"
    t.string "address_one"
    t.string "address_two"
    t.string "city"
    t.string "state"
    t.integer "zip_code"
    t.boolean "fufilled"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "purchase_products", "products"
  add_foreign_key "purchase_products", "purchase_records", column: "purchase_records_id"
end
