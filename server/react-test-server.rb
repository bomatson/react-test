require 'sinatra'
require 'sinatra/cross_origin'
require 'json'

configure do
  enable :cross_origin
end

post '/apply' do
  content_type :json
  puts params
  return [
    { name: params[:firstName], rate: '3.4' },
    { name: params[:lastName], rate: '4.4' },
    { name: params[:amount], rate: '5.4' },
    { name: params[:creditScore], rate: '6.4' },
    { name: params[:purpose], rate: '7.4' },
    { name: params[:salary], rate: '8.4' },
  ].to_json
end
