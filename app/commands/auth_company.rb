# app/commands/authenticate_company.rb

class AuthCompany
  include JWTHelper
  prepend SimpleCommand

  def initialize(email, password)
    @email = email
    @password = password
  end


  def call
    if company
      JWTencode({company_id: company.id, exp: 24.hours.from_now.to_i})
    end
  end


  private

  attr_accessor :email, :password

  def company
    company = Company.find_by({email: email})
    return company if company && company.authenticate(password)

    errors.add :company_authentication, 'invalid credentials'
    nil
  end
end