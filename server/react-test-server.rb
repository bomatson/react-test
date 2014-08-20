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
    { name: 'ok', rate: '4.4' },
    { name: 'decent', rate: '5.4' },
    { name: params[:lastName], rate: '6.4' },
    { name: 'worse', rate: '7.4' },
    { name: 'worst', rate: '8.4' },
  ].to_json
end
