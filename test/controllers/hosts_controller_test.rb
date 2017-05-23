require 'test_helper'

class HostsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get hosts_create_url
    assert_response :success
  end

  test "should get destroy" do
    get hosts_destroy_url
    assert_response :success
  end

end
