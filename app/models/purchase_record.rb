# frozen_string_literal: true

class PurchaseRecords < ApplicationRecord
  has_many :purchase_products
  has_many :products, through: :purchase_products
end
