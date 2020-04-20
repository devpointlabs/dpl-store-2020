# frozen_string_literal: true

class ApplicationMailer < ActionMailer::Base
  default from: 'julescgreene.slc@gmail.com'
  layout 'mailer'
end
